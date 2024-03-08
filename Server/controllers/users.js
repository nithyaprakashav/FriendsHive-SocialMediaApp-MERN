import express from 'express'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const getUser = async (req , res) => {
    try {
        const{_id} = req.params
        const user = await User.findById(_id)
        return res.status(200).json(user)
    } catch (err) {
        res.status(404).json({mssg: err.message})
    }
}

export const getUserFriends = async (req, res) => {
    try {
        const {_id} = req.params
        const user = await User.findById(_id)
        const friends = await Promise.all(
            user.friends.map((id)=> user.findById(_id))
        )
        const formattedFriends = friends.map(
            ({_id , firstName , lastName, occupation , location , picturePath})=>{
                return({_id , firstName , lastName , occupation , location , picturePath})
            }
        )
        res.status(200).json(formattedFriends)
    } catch (err) {
        res.status(404).json({mssg: err.message})
    }
}

//Update

export const addRemoveFriends = async (req, res) => {
    try {
        const {_id , friendId} = req.params
        const user = await User.findById(_id)
        const friend = await User.findById(friendId)

        if(user.friends.includes(friendId)){
            user.friends =user.friends.filter((id)=> id!==friendId)
            friend.friends = friend.friends.fiter((id) => id!=_id)
        }else{
            user.friends.push(friendId)
            friend.friends.push(_id)
        }
        await user.save()
        await friend.save()

        const formattedFriends = friends.map(
            ({_id , firstName , lastName, occupation , location , picturePath})=>{
                return({_id , firstName , lastName , occupation , location , picturePath})
            }
        ) 
        res.status(200).json(formattedFriends)       
    } catch (err) {
        res.status(404).json({mssg: err.message})
    }
}