import { useAuth } from "../auth/AuthContext"

const Login=()=>{
    const{login}=useAuth()
    const handleLogin=()=>{
        login("asdasdas")
    }
return(
    <section>
        <button onClick={handleLogin}>Login</button>
    </section>
)
}
export default Login