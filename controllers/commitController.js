const Commit = require(`../models/Commit`)
exports.createCommit=async(req,res)=>{
    const commit=new Commit({
        productID:req.body.productID,
        userID:req.body.userID,
        message:req.body.message
    })
    await commit.save()
    .then(() => {
        res.status(201).json({
            success:true,
            data:commit
        })
    }).catch((err) => {
        res.status(500).json({
            success:false,
            data:err
        })
    });
}
// exports.getByUserCategoryIuserIDcommit=async (req,res)=>{
//     const commit= await Commit.find({categoryID: req.params.id}&&{userID:req.params.id})
//     .populate(['categoryID','userID'])
//      .sort({date:-1})
//      .then(()=>{
//         res.status(200).json({
//             success: true,
//         commit : commit
//         })
        
//          })
// }
exports.getById=async (req,res)=>{
    const commit = await Commit.findById(req.params.id)
    .then(()=>{
        res.status(200).json({
            success: true,
        commit : commit
        })
        
         })
}

exports.updateCommit= async(req,res)=>{
    const commit = await Commit.findByIdAndUpdate(req.params.id)
    commit.productID=req.body.productID
    commit.userID=req.body.userID
    commit.message=req.body.message
    commit.save({validateBeforeSave:false})
    await commit.save()
    .then(()=>{
        res.status(200).json({
            success:true,
            commit:commit
        })
    })

}

exports.commitDelete=async(req,res,next)=>{
    await Commit.findByIdAndDelete({_id:req.params.id})
    res.status(200).redirect(`/commit/all`)
}