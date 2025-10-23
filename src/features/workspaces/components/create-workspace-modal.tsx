"use client"

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal"
import { useCreateWorkspace } from "../api/use-create-workspace"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

export const CreateWorkspaceModal = ()=> {
    const [open, setOpen] = useCreateWorkspaceModal()    

    const { mutate } = useCreateWorkspace()

    const handleClose = ()=> {
        setOpen(false)
    }

    const handleSubmit = async ()=> {
        const data = await mutate({
            name: "Workspace 1",
        }, 
        {
            onSuccess(data) {

            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <Input
                    placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
                    disabled={false}
                    minLength={3}
                    autoFocus
                    value=""
                    required/>

                    <div className="flex justify-end">
                        <Button disabled={false}>Create</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}