import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

export const useConfirm = (title: string, message: string): [any, any]=> {
    const [promise, setPromise] = useState<{ resolve: (value: boolean)=> void | null }>

    return ["", ""]
}