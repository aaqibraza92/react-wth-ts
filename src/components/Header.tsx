
import { useState } from "react";
import Box from '@mui/material/Box';

import headerStyle from "../assets/css/header.module.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header: React.FC = () => {
  return (
    <>
      <Box className={headerStyle.topHeader}>
        Free Shipping All Over The World
      </Box>
      <HeaderDesktop/>
      <HeaderMobile/>
    </>
  )
}

export default Header