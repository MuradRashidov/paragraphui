
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { deletePost } from "@/lib/actions/postAction"
import Link from "next/link"
import { use } from "react"
import InerceptorComponent from "./_components/InerceptorComponent"

type Props = {
    params: Promise<{ id: string }>
}
const InterCeptorDeletePostPage = async(props: Props) => {
    const params = await (props.params)
    const postId = parseInt(params.id)
    return(
        <InerceptorComponent postId={postId}/>
    )
   
}

export default InterCeptorDeletePostPage