import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import {Videos,ChannelCard} from './'
import { fetchFromApi } from "../utils/fetchFromApi"



const ChannelDetail = () => {
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);

  const {id}=useParams();

console.log(channelDetail);

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  },[id])

  return (
    <Box minHeight='95vh' >
      <Box>
        <div style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          zIndex:10,
          height:'300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'  marginLeft={{sm:'25vw',md:'40vw',xs:'5vw'}} />
      </Box>
      <Box
      display='flex'
      p='2'
      pt='17px'
     
      >
        <Box marginRight={{md:"190px",xs:'10px'}}  />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail