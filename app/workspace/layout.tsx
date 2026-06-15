import { ReactNode } from "react";
import WorkSpaceHeader from "@/components/custom/WorkspaceHeader";
import WorkSpaceBody from "@/components/custom/WorskSpaceBody";

function WorkSpaceLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <WorkSpaceHeader />
            {children}
        </div>
    );
}

export default WorkSpaceLayout
