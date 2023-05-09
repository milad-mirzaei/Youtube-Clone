import { Stack } from "@mui/system"
import { categories } from "../utils/constant"


const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction='row'
    sx={{
        overflowY:'auto',
        backgroundColor:'#d6e2e9',
        p:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:'column'},
    }}
    >
{categories.map((category,index)=>(
    category?.name!=="JS Mastery" && <button onClick={()=>setSelectedCategory(category.name)} key={category.name} className="category-btn" style={{backgroundColor:category.name===selectedCategory&&'red',color:category.name===selectedCategory?'#fff':'#023e7d'}} >
   <span style={{color:category.name===selectedCategory?"white":'red',marginRight:'15px'}}> {category.icon}</span>
   <span> {category.name}</span>
 </button>
  
))}
    </Stack>
  )
}

export default Sidebar