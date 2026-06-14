"use client"
import { UserDetialContext } from "@/context/userDetail";
import axios from "axios";
import { useEffect, useState } from "react";


function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [userDetails, setUserDetails] = useState<any>();

    useEffect(() => {
        CreateNewUser();
    }, [])
    const CreateNewUser = async () => {
        const result = await axios.post('/api/users', {});
        console.log(result, "result")
        setUserDetails(result?.data?.user)
    }

    return (
        <UserDetialContext.Provider value={{ userDetails, setUserDetails }}>
            <div>{children}</div>
        </UserDetialContext.Provider>
    )
}

export default Provider