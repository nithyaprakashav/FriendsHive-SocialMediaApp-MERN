import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

//Register USer

export const register = async (req , res) => {
    try {
        const{
            firstName , 
            lastName,
            email , 
            password,
            picturepath,
            friends,
            location,
            occupation
        } = req.body

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password , salt)

        const newUser = new User({
            firstName , 
            lastName,
            email , 
            password: passwordHash,
            picturepath,
            friends,
            location,
            occupation,
            viewedProfile:Math.floor(Math.random()*10000),
            impressions:Math.floor(Math.random()*10000)
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//Logging in

export const login = async (req, res) => {
    try {
        const {email , password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({mssg:'User doesnot exist'})
        }
        const match = await bcrypt.compare(password,user.password)
        if(!match){
            return res.status(400).json({mssg: 'Incorrect Password'})
        }
        const token = jwt.sign({id: user._id} , process.env.SECRET)
        res.status(200).json({token , user})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}