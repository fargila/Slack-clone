import { Button } from "@/components/ui/button"
import { useWorkspaceId } from "@/hooks/use-workspace-id"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { IconType } from "react-icons/lib"

interface SideBarItemProps {
    label: string
    id: string
    icon: LucideIcon | IconType
}

export const SideBarItem = ({ label, id, icon: Icon }: SideBarItemProps)=> {
    const workspaceId = useWorkspaceId()
    
    return (
        <Button
        size="sm" 
        asChild>
            <Link href={`/workspace/${workspaceId}/channel/${id}`}>
                <Icon />
                <span>{ label }</span>
            </Link>
        </Button>
    )
}