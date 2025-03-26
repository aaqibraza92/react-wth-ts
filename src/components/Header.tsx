
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

import headerStyle from "../assets/css/header.module.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  const resizeScreen = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    resizeScreen()
    window.addEventListener("resize", resizeScreen)

    return (() => {
      window.removeEventListener("resize", resizeScreen)
    })
  }, [])

  return (
    <>
      <Box className={headerStyle.topHeader}>
        Free Shipping All Over The World
      </Box>
      {
        width > 990 ? <HeaderDesktop /> : <HeaderMobile />
      }


    </>
  )
}

export default Header