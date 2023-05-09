import { useState,useEffect } from "react"
import { Box, Stack, Typography,  } from "@mui/material"
import {Sidebar,Videos} from "./"
import { fetchFromApi } from "../utils/fetchFromApi"


const Feed = () => {

const [selectedCategory, setSelectedCategory] = useState('New')
const [videos, setVideos] = useState([])

useEffect(()=>{
  fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)});
  
},[selectedCategory])



  return (
    <Stack sx={{flexDirection:{md:'row',xs:'column'}}}>
      <Box
      sx={{height:{xs:'10vh' , md:'92vh'}, px:{xs:0,md:2}, }}
      >
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Typography
        className="copyright"
        variant="body2"
        sx={{mt:1.5,color:'#fff'}}
        >
          Copyright 2022 MilAd
        </Typography>
      </Box>
      <Box m={1} ></Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white' }} >
          {selectedCategory} <span style={{color:'#f31503'}}>videos</span>
        </Typography>
        <Box marginTop={3} marginLeft={{md:'57px', xs:'0px'}} ><Videos videos={videos} /></Box>
      </Box>
    </Stack>
  )
}

export default Feed