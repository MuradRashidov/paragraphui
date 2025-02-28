"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { deletePost } from "@/lib/actions/postAction"

const InerceptorComponent = ({postId}:{postId:number}) => {
    return (
        <AlertDialog open>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Postu silmək istədiyinizdən əminsiniz?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Bu əməliyyat nəticəsində post və onunla əlaqəli digər bütün məlumatlar silinəcək.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <a href="/user/posts">Imtina et</a>
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => deletePost(postId)} asChild>
                        <Button variant="destructive">
                        <a href="/user/posts">Sil</a>
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default InerceptorComponent