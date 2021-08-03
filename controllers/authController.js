const User = require('../models/User')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')

exports.super_admin = async (req,res,next)=>{
    try {
        const {name,email,password,uid,role} = req.body
        const uuid = uuidv4()
    const user = new User({name,email,password,uid:uuid,role})
    await user.save()
    req.session.admin = user;
    req.session.isAuth = true;
    req.session.save();
        res.status(201).redirect('/admin/dashboard')
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}

exports.login = async (req,res,next)=>{
    const {email, password} = req.body
    if (!email && !password) {
      res.redirect('/api/auth/login')
    }
    await User.findOne({email}, (err,user)=>{
        if(err){
            return res.status(403).redirect('/api/auth/login')
        }
        if(!user){
        return res.status(404).redirect('/api/auth/login')
        }
        user.matchPassword(password, (err,isMatch)=>{
             if(err) throw err;
             if (!isMatch) {
                res.status(404).redirect('/api/auth/login')
             }else{
                      req.session.admin = user;
                      req.session.isAuth = true;
                      req.session.save()
                      res.status(200).redirect('/admin/dashboard')
            }
        })
    })
}

exports.userLogin = async (req,res,next)=>{
    res.render('admin/login/index', {layout:'./admin/login/layout'})
}

exports.logout = async (req,res,next)=>{
    req.session.destroy();
    res.clearCookie("connectid.sid");
    res.redirect('/api/auth/login')
}

exports.getOne = async (req, res, next) => {
  const result = await User.findById(req.params.id)
  const user = req.session.admin; 
  res.render('admin/profile/index', {layout:'./admin_layout', result, user})
}

exports.updateOne = async (req,res,next)=>{
    try {
        const {name,email,password,role} = req.body;
        await User.findByIdAndUpdate({_id:req.params.id}, {name,email,password,role})
        .then(user=>{
            req.session.admin = user;
            req.session.save()
        })
        res.redirect('/admin/dashboard')
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}

exports.elementDelete = async (req,res,next)=>{
    await User.findByIdAndDelete(req.params.id)
    res.redirect('/admin/dashboard')
}