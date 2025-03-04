import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./AuthContext"

const PrivateRoutes=()=>{
    // const {token}= useAuth()
    console.log("auth",useAuth())
return(
    <>
    </>
    // token ? <Outlet/> : <Navigate to="/404"/>
)
}
export default PrivateRoutes