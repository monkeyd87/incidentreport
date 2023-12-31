
const router =  require('express').Router()
const {User} = require('../../models')
const jwt = require('jsonwebtoken')


router.route('/')
.post(async(req,res)=>{
        const {key,username,email,password} = req.body
    if(key!='educ8fortune!') return res.json({message:'Not authorized'})
    try{
        
        const user = await User.create({email,username,password})
        if(!user) return res.status(400).json({message:'problom'})
        const {admin,teacher,_id} = user
        const token = jwt.sign({payload:{username,admin,teacher,_id}},'super-secret')
        res.status(200).json({token:token})
    }catch(err){
        res.status(500).json({message:'error'})
        console.log(err)
    }
    
})

module.exports = router