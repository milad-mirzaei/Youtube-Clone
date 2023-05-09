import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#F0F0F0",
      top: "0",
      justifyContent: "space-between",
      flexDirection:{xs:'column',sm:'row',md:'row',lg:'row'}
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      
        <img src={logo} alt="logo" height={45} />
        <Typography marginLeft={2} variant="h6" fontWeight='bold' color='white'>MilAd</Typography>
     
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
