const User = require('../models/User')
const { v4: uuidv4 } = require('uuid');

exports.register= async (req,res,next)=>{
    try {
        const {name,email,password,phone,uid} = req.body
        const uuid = uuidv4()
    const user = new User({name,email,password,phone,uid:uuid})
    await user.save()
    req.session.admin = user;
    req.session.isAuth = true;
    req.session.save();
        res.status(201).redirect('/');
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}

exports.login = async (req,res,next)=>{
    const {email, password} = req.body
    try {
        if (!email || !password) {
            res.redirect("/admin/login");
          }
          await User.findOne({email}, (err,user)=>{
              if(err){
                  return  console.log('chota shu yerda hato borov')/*res.status(403).json({msg:err.message})*/
              }
              if(!email){
              return res.status(404).json({msg:"Bunaqa foydalanuvchi mavjud emas"})
              }
              user.matchPassword(password, (err,isMatch)=>{
                  if(err) throw err;
                  if (!isMatch) {
                    res.status(404).json({msg:"Password xato"})
                  }else{
                      req.session.admin = user;
                      req.session.isAuth = true;
                      req.session.save()
                      res.status(200).redirect('/')
                  }
              })
          })
    } catch (error) {
        return res.status(500).json({msg:error.message})
}
}

exports.logout = async (req,res,next)=>{
    req.session.destroy();
    res.clearCookie("connectid.sid");
    res.redirect('/user/login')
}

exports.getOne = async (req, res, next) => {
  const result = await User.findById(req.params.id)
  const user = req.session.admin; 
  res.status(200).json({result,user})
}

exports.deleteUser = async (req, res, next) => {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ success: true, data: [] });
  };

exports.updateOne = async (req,res,next)=>{
    try {
        const {fullName,email,password,phone,addressrole} = req.body;
        await User.findById({_id:req.params.id}, {fullName,email,password,phone,addressrole})
        .save()
        .then(user=>{
            req.session.admin = user;
            req.session.save()
        })
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}
