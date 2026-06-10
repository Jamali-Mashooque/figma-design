import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children  , setHandleLogin}) => {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        const fetchAuth = async () => {
            try {
                const response = await fetch("http://localhost:5000/auth/auth-check"
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
    return auth ? children : <Navigate to="/login" />
}

export default ProtectedRoutes