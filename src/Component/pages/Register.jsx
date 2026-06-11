import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"
const Register = () => {
   const [username ,  setUsername]=useState("")
   const [email ,  setEmail]=useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const [password ,  setPassword]=useState("")
   const [message ,  setMessage]=useState("")

//    api intigration

const handleRegister =async()=>{
    
     if (password !== confirmPassword) {
        alert("Passwords do not match ❌")
        return
    }
    try {
        const response = await fetch("https://figma-design-backend-production.up.railway.app//auth/register-user",
            {
                method :"POST",
                headers :{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username:username,
                    email:email,
                    password:password
                })
            }
        )

        if(response.ok){
            const data = await response.json()
            setMessage(data.message)
            alert("Register successfuly")
        }
    } catch (error) {
        console.log("Error",error.message)
    }
}
       
  return (
    <>
    <div className="Register">
        <h2>Register</h2>
    <div className="farm">
        <label htmlFor="">Name : </label>
        <br></br>
        <input type="text"style={{paddingLeft:"10px"}} placeholder='Enter your Name' value={username}onChange={(e)=>setUsername(e.target.value)}/>
        <br></br>
       
    
        <label htmlFor="">Email : </label><br></br>
        <input type="email" style={{paddingLeft:"10px"}} placeholder='Enter your email' value={email}onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <label htmlFor="">Password : </label><br></br>
        <input type="password" style={{paddingLeft:"10px"}} placeholder='Enter your password' value={password}onChange={(e)=>setPassword(e.target.value)}/>
        <br></br>
        <label htmlFor="">Confirm Password : </label><br></br>
        <input type="password" style={{paddingLeft:"10px"}} placeholder='Enter your password again' value={confirmPassword}onChange={(e)=>setConfirmPassword(e.target.value)}/><br></br>
        <button onClick={handleRegister}>Register</button>

        <p>already have an account ? <Link to={"/login"}>login</Link></p>
    </div>
    </div>
    </>
  )
}

export default Register