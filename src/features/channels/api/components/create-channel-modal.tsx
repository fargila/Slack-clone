import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useCreateChannelModal } from "../store/use-create-channel-modal"

export const CreateChannelModal = ()=> {
    const [open, setOpen] = useCreateChannelModal()
    
    return (
        <Dialog></Dialog>
    )
}