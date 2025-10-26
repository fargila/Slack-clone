import { UserButton } from "@/features/auth/components/user-button"
import { WorkspaceSwitcher } from "./workspace-switcher"
import { SidebarButton } from "./sidebar-button"
import { BellIcon, Home, MessagesSquare, MoreHorizontal } from "lucide-react"

export const Sidebar = () => {

    return (
        <aside className="w-[70px] h-full bg-purple-700 flex flex-col gap-y-4 items-center pt-[9px] pb-[4px]">
            <SidebarButton icon={Home} label="Home" isActive/>
            <SidebarButton icon={MessagesSquare} label="DMs" isActive/>
            <SidebarButton icon={BellIcon} label="Activity" isActive/>
            <SidebarButton icon={MoreHorizontal} label="More" isActive/>
            <WorkspaceSwitcher />
            <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
                <UserButton />
            </div>
        </aside>
    )
}