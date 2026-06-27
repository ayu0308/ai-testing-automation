"use client";
import { UserDetailContext } from "@/context/userDetail";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import EmptyWorkspace from "./EmptyWorkspace";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function WorkSpaceBody() {
    const { userDetail } = useContext(UserDetailContext);
    const router = useRouter();
    const [token, setToken] = useState('');
    const GetGithubToken = async () => {
        const result = await axios.get('/api/github/token');
        console.log(result.data);
        setToken(result.data.token);
    }

    useEffect(() => {
        GetGithubToken();
    }, []);

    const OnAddRepo = async () => {
        router.push('/api/github');
    }

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-medium">Workspace</h2>
                <h2 className="text-blue-800 bg-blue-100 px-2 rounded-lg">Remaining Credits: {userDetail?.credits}</h2>
            </div>


            <Card className="mt-10 flex justify-between items-center p-4 border rounded-lg">
                <div className="flex items-center gap-5">
                    <Image src={'/github.svg'} alt="github" width={40} height={40} />
                    <h2>Connect Github & Add Repo</h2>
                </div>
                <div>
                    {!token ? <Button onClick={OnAddRepo}>
                        Setup
                    </Button> : <Button>
                        + Add Repo
                    </Button>}
                </div>
            </Card>``
            <Card className="mt-10">
                <CardContent>
                    <EmptyWorkspace />
                </CardContent>
            </Card>
        </div>
    );
}

export default WorkSpaceBody;