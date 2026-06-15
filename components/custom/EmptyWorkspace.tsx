import Image from "next/image";
import { Button } from "../ui/button";
import { Link2 } from 'lucide-react';


function EmptyWorkspace() {
    return (
        <div className="flex flex-col mt-10 justify-center items-center">
            <Image src={'/file.svg'} alt="folder" width={70} height={70} />
            <h2 className="font-medium text-2xl mt-2">No Repository Connected.</h2>
            <p className="text-slate-500 text-center mx-10">Connect your Github account and add your first repository.</p>

            <Button className=" mt-5">
                <Link2 className="h-4 w-4 mr-2" /> Connect Repo
            </Button>
        </div>
    );
}

export default EmptyWorkspace;