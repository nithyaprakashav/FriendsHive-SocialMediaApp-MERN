import express from 'express'
import {
    getUser , 
    getUserFriends,
    addRemoveFriends
} from '../controllers/users.js'
import {verifyToken} from '../middlewares/auth.js'

const router = express.Router()

//Read the data for that particular user

router.get('/:id' , verifyToken , getUser)
router.get('/:id/friends', verifyToken , getUserFriends)

//Update
router.patch('/:id/:friendId' , verifyToken, addRemoveFriends)



export default router