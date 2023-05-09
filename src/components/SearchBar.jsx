import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper,Box,IconButton, Hidden } from "@mui/material"
import {Search} from '@mui/icons-material'



const SearchBar = () => {

const [searchTerm, setSearchTerm] = useState('');

const navigate = useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault();
  if(searchTerm){
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  }
}


  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
        borderRadius:4,
        border: '3px solid white',
        backgroundColor:'#d6e2e9',
        pl:2,
        mt:{xs:2},
        boxShadow: "none",
        justifyContent:'space-between',
        width:{xs:'70vw',md:'25vw'},
        ml:{sm:2},
        mr:{xs:0,sm:2,md:2,lg:2},
        
    }}
    >
       <Box  width={{xs:'70vw',md:'25vw'}} overflow='hidden' display='flex' justifyContent='space-between'>
         <input  className="search-bar" value={searchTerm} placeholder="Search..." onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <IconButton type="submit" sx={{p:'10px',color:'red'}} >
            <Search />
        </IconButton>
        </Box>
    </Paper>
  )
}

export default SearchBar