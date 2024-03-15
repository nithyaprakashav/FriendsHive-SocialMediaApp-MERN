import { Typography , useTheme} from '@mui/material'
import FlexBetween from 'components/flexBetween'
import WidgetWrapper from 'components/WidgetWrapper'


const AdsWidget = () => {

    const {palette } = useTheme()
    const dark = palette.neutral.dark
    const main = palette.neutral.main
    const medium = palette.neutral.medium


    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant='h5' fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img  
            width="100%"
            height="auto"
            alt='advert'
            src='http://localhost:3001/assets/GymsharkAd.jpg'
            style={{borderRadius:"0.75rem" , margin:"0.75rem 0"}}
            />
           <FlexBetween>
                <Typography color={main} >GymShark</Typography>
                <Typography color={medium}>gymshark.com</Typography>
            </FlexBetween> 
                <Typography color={medium} m="0.5rem 0">
                    Eat Clean. Train Mean. Get Lean.
                    United We Sweat.
                </Typography>
        </WidgetWrapper>
    )
}


export default AdsWidget