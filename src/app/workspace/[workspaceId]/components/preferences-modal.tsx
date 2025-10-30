import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import { useUpdateWorkspace } from "@/features/workspaces/api/use-update-workspace"
import { useRemoveWorkspace } from "@/features/workspaces/api/use-remove-workspace"
import { TrashIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

interface PreferencesModalProps {
    open: boolean
    setOpen: (open: boolean)=> void
    initialValue: string
}

export const PreferencesModal = ({open, setOpen, initialValue}: PreferencesModalProps)=> {
    const [value, setValue]  = useState(initialValue)
    const [editOpen, setEditOpen] = useState(false)

    const { mutate: updateWorkspace, isPending: isUpdatingWorkspace } = useUpdateWorkspace()
    const { mutate: removeWorkspace, isPending: isRemovingWorkspace } = useRemoveWorkspace()


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                <DialogHeader className="p-4 border-b bg-white">
                    <DialogTitle>
                        {value}
                    </DialogTitle>
                </DialogHeader>
                
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <Dialog open={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger asChild>
                            <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold">
                                        Workspace name
                                    </p>
                                    
                                    <p className="text-sm text-blue-500 hover:underline font-semibold"> Edit </p>
                                </div>
                                
                                <p className="text-sm">{value}</p>
                            </div>
                        </DialogTrigger>
                        
                        <DialogContent className="bg-white">
                            <DialogHeader>
                                <DialogTitle>
                                    Rename this workspace
                                </DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4" onSubmit={()=> {}}>
                                <Input 
                                placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
                                maxLength={80}
                                minLength={3}
                                autoFocus
                                required
                                onChange={(e)=> setValue(e.target.value)}
                                disabled={isUpdatingWorkspace}
                                value={value}/>
                            </form>
                        </DialogContent>
                    </Dialog>
                    
                    <button 
                    className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 text-rose-600"
                    disabled={false} 
                    onClick={()=> {}}>
                        <TrashIcon className="size-4"/>
                        <p className="text-sm font-semibold">Delete workspace</p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}