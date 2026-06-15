import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

function WorkSpaceHeader() {
    return (
        <div className="flex w-full justify-between p-4">
            {/* logo here */}
            <Image src="/logo.svg" width={100} height={100} alt="Logo" />
            {/* menu optios */}
            <ul className="flex gap-5 text-xl">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">WorkSpace</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Support</li>
            </ul>
            {/* user details */}
            <UserButton />
        </div>
    );
}

export default WorkSpaceHeader