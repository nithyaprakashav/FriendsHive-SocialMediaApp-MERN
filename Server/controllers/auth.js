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

        const newUSer = new User({
            
        })
    } catch (error) {
        
    }
}