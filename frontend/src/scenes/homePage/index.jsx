import{Box, useMediaQuery} from '@mui/material'
import { useSelector } from 'react-redux';
import NavBar from 'scenes/navBar';
import AddPostWidget from 'scenes/widgets/AddPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import UserWidget from 'scenes/widgets/UserWidget';

const HomePage = () => {

    const isNonMobileScreens = useMediaQuery("(min-width:100px)")
    const { _id , picturePath} = useSelector((state)=> state.user)
    const posts = useSelector((state)=> state.posts)
    console.log("Posts:", posts);

    return (
        <Box>
           <NavBar/> 
           <Box
           width="100%"
           p="2rem 6%"
           display={isNonMobileScreens ? "flex" : "block"}
           gap="0.5rem"
           justifyContent="space-between"
           >
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                <UserWidget  userId={_id} picturePath={picturePath} />
            </Box>
            <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>

                <AddPostWidget picturePath={picturePath}/>
                <PostsWidget userId={_id}/>

            </Box>

            {isNonMobileScreens && (
                <Box flexBasis="26%"></Box>
            )}

           </Box>
        </Box>
    );
}
 
export default HomePage;