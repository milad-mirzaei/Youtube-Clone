import { Stack,Box } from "@mui/system";
import {VideoCard,ChannelCard} from "./";

const Videos = ({ videos,direction}) => {

  if(!videos?.length) return 'Loading...';

  return (
    <Stack
    direction={direction ||'row'}
    flexWrap='wrap'
    justifyContent='start'
    gap={0}
    >
      
{videos.map((item,idx)=>(
  <Box key={idx} >
    {item.id.videoId && <VideoCard video={item} />}
    {item.id.channelId && <ChannelCard channelDetail={item} backgroundColor='#d6e2e9' border='3px solid white' />}
  </Box>
))}
    </Stack>
    )
}

export default Videos