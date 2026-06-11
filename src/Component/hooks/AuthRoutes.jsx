import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const AuthRoutes = ({ children , setHandleLogin }) => {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        const fetchAuth = async () => {
            try {
                const response = await fetch("https://figma-design-backend-production.up.railway.app//auth/auth-check"
                    ,
                    {
                        method: "Get",
                        credentials: "include"

                    }
                )

                if (response.ok) {
                    setAuth(true)
                    setHandleLogin(true)
                    localStorage.setItem("token", true)
                } else {
                    setAuth(false)
                    localStorage.removeItem("token")

                }


            } catch (error) {
                console.log("Server Error : ", error.message)
            }
        }

        fetchAuth()
    }, [])

    if (auth === null) {
        // return <><h1>Loading....</h1></>
    }
    return auth ? <Navigate to="/" /> : children  
}

export default AuthRoutes