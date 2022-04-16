import { useState, useEffect } from "react"

import ErrorUI from "./ErrorUI"

const UserProfile = ({ userId }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [profileData, setProfileData] = useState({})

    useEffect(() => {
        // Separate function to make of use of async
        const getUserDataAsync = async () => {
            try {
                // Fetch user data from API
                const userData = await fetch(`/users/${userId}`)
                console.log(userData)
                // Throw error if user data is falsy (will be caught by catch)
                if (!userData.profile) {
                    throw new Error("No user data found")
                }
                // If user data is truthy update state
                setProfileData(userData.profile)
            } catch (error) {
                // Log any caught error in the logging service
                console.log({ error })
                // Update state 
                setProfileData(null)
            } finally {
                // Reset loading state in any case
                setIsLoading(false)
            }
        }

        getUserDataAsync()
    }, [])

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (!profileData) {
        return <ErrorUI />
    }

    return (
        <div>
            ...User Profile
        </div>
    )
}

export default UserProfile