"use client"

import { Sidebar } from "./components/sidebar"
import { Toolbar } from "./components/toolbar"
import {
    ResizablePanelGroup,
    ResizableHandle,
    ResizablePanel,
} from "@/components/ui/resizable"
import { WorkspaceSidebar } from "./components/workspace-sidebar"

interface WorkspaceIdLayoutProps {
    children: React.ReactNode   
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps)=> {
    return (
        <div className="h-full">
            <Toolbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                
                <ResizablePanelGroup
                direction="horizontal"
                autoSaveId="ca-workspace-layout">
                    <ResizablePanel
                    defaultSize={20}
                    minSize={11}
                    className="bg-purple-500">
                        <WorkspaceSidebar/>
                    </ResizablePanel>
                    
                    <ResizableHandle withHandle/>
                    
                    <ResizablePanel minSize={20}>
                        { children }
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default WorkspaceIdLayout