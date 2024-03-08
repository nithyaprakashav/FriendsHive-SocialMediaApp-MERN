import jwt from 'jsonwebtoken'


export const verifyToken = async ( req , res , next) =>{
    try {
        let token = req.headers('authorization')
        if(!token){
            return res.sendStatus(402).send('Access Denied')
        }
        if(token.startsWith('Bearer')){
            token = token.split(" ")[1]
        }
        const verified = jwt.verify(token , process.env.SECRET)
        if(verified){
            req.user = verified
        }
        next()
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}