import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
const Login = () => {
    const [email , setEmail]  = useState("")
    const[password,setPassword]=useState("")
const navigate = useNavigate()
    // api intigration

    const handleLogin = async({setHandleLogin})=>{
      
      if(!email || !password){
        alert("Email and Password are required ")
        return
      }
      try {
        
        const response = await fetch("https://figma-design-backend-production.up.railway.app/auth/login-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            credentials: "include",

            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json()

        if (response.ok) {
            alert("Login Successfully ✅")
            
            console.log(data)
           navigate("/") 
       
        }
      } catch (error) {
         console.log("Error :", error.message)
      }
    }
    
  return (
    <>
    <div className="login">
        <h2>Login</h2>
        <div className="loginfarm">
        <label htmlFor="">Email : </label><br></br>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{paddingLeft:"10px"}} placeholder='Enter your email    '/><br></br>
        <label htmlFor="">Password : </label><br></br>
         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{paddingLeft:"10px"}} placeholder='Enter your password'/>
         <br></br>
         <button onClick={handleLogin}>Login</button>
         
        <p>Don,t have an account ? <Link to={"/Register"}>Sign Up</Link></p>
    </div>
    </div>
    </>
  )
}

export default Login