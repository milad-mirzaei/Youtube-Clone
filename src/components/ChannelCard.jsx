import { CardContent,Box,CardMedia,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constant"

const ChannelCard = ({channelDetail,marginTop,backgroundColor,border,marginLeft}) => {
  return (
    <Box
    sx={{
       boxShadow:'none',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       width:{xs:'92vw',sm:'358px',md:'270px'},
       height:'296px',
       border,
       borderRadius:'14px',
       backgroundColor,
       marginRight:'12px',
       marginBottom:'12px',
       marginTop,
       marginLeft
    }}
    >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} >
      <CardContent sx={{display:'flex',flexDirection:'column', justifyContent:'center',textAlign:'center',color:'#fff'}} >
        <CardMedia 
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{
            borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'7px solid white'
        }}
        />
        <Typography variant="h6" color='#023e7d' >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:'#023e7d' , ml:'5px'}} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{color:'gray'}} >
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
        )}
      </CardContent>
    </Link>

    </Box>
  )
}

export default ChannelCard