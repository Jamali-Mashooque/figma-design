import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const CompHeader = ({handleLogin , setHandleLogin}) => {
    const location = useLocation()
const navigate = useNavigate();
  

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5000/auth/logout-user",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            if (response.ok) {
                localStorage.removeItem("token")
                setHandleLogin(false)
                navigate("/login");
            }
        } catch (error) {
            console.log("Error : ", error.message)
        }
    }
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <h1>SHOP.CO</h1>
                </div>
                <div className="links">
                    <Link to={`/`}><button>Home</button></Link>
                    {
                        handleLogin ? <>
                            <button onClick={handleLogout} >Logout</button>

                        </>
                            : <>
                                <Link to={`/login`}><button>Login</button></Link>
                                <Link to={`/register`}><button>Register</button></Link>

                            </>
                    }
                </div>

            </div>
        </div>
    )
}

export default CompHeader