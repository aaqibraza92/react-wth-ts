
import { memo, useEffect, useState } from "react";
import Box from '@mui/material/Box';

import headerStyle from "../assets/css/header.module.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";


const MyComponent = memo(({ count }: { count: number }) => {
  console.log("Component re-rendered");
  return <h2>Count: {count}</h2>;
});

const Header: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [headerCount, setheaderCount] = useState<number>(0);

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
    {headerCount}
    <button onClick={()=>setheaderCount(headerCount + 1)}>header update</button>
       <MyComponent count={count} />
       <button onClick={() => setCount(count + 1)}>Increment</button>
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