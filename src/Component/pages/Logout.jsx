import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()

    useEffect(() => {

        const handleLogout = async () => {

            try {

                const response = await fetch(
                    "https://figma-design-backend-production.up.railway.app//auth/logout",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                )

                const data = await response.json()

                if (response.ok) {

                    // remove auth

                    localStorage.removeItem("auth")

                    alert(data.message)

                    navigate("/login")
                }

            }

            catch (error) {

                console.log("Logout Error :", error.message)
            }
        }

        handleLogout()

    }, [])

    return (
        <div>
            <h1>Logging Out...</h1>
        </div>
    )
}

export default Logout