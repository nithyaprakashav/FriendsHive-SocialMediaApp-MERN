import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
    Palette
} from "@mui/icons-material"
import { Box , Typography , Divider , useTheme } from "@mui/material"
import UserImage from "components/UserImage"
import FlexBetween from "components/flexBetween"
import WidgetWrapper from "components/WidgetWrapper"
import { UseSelector, useSelector } from "react-redux"
import { useEffect , useState } from "react"
import { useNavigate } from "react-router-dom"

const UserWidget = ({userId , picturePath}) => {
    const [user , setUser] = useState(null)
    const {palette} = useTheme()
    const navigate = useNavigate()
    const token = useSelector((state)=> state.token)
    const dark = palette.neutral.dark
    const medium = palette.neutral.main
    const main = palette.neutral.main

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,{
            method:"GET",
            headers:{authorization : `Bearer ${token}`},  
        })
        const data = await response.json()
        setUser(data)
    }

    useEffect(()=>{
        getUser()
    },[])

    if(!user){
        return null
    }

    const {
        firstName , 
        lastName , 
        location,
        occupation,
        viewedProfile,
        impressions,
        friends
    } = user

    return ()
}
