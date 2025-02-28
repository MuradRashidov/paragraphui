import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createComment } from '@/lib/actions/commentActions';
import { SessionUser } from '@/lib/session'
import { CommentEntity } from '@/lib/types/modelTypes';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import React, { useActionState, useEffect } from 'react'

type Props = {
    postId: number
    user: SessionUser;
    classname?: string;
    refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<{
        comments: CommentEntity[];
        count: number;
    }, Error>>
}
const CreateComment = ({
    postId,
    user,
    classname,
    refetch
}: Props) => {
    const [state, action] = useActionState(createComment, undefined);
    const { toast } = useToast();

    useEffect(() => {
        if (state?.message)
            toast({
                title: state?.ok ? "Success" : "Oops!",
                description: state?.message,
            });
        if (state?.ok && refetch) refetch();
    }, [state]);
    return (
        <Dialog open={state?.open}>
            <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-white hover:text-orange-400 transition-all duration-300" ><PlusIcon /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    Yeni Şərh
                </DialogTitle>
                <form onSubmit={() => console.log()
                } className="flex flex-col [&>button]:self-end" action={action}>
                    <input onChange={() => null} name="postId" value={postId} hidden />
                    <p className="mb-2">
                        <span className="font-semibold text-sm text-slate-600">{user.name}</span>
                        <span className="text-sm text-slate-400"> kimi əlavə edin</span>
                    </p>
                    {/* <Label htmlFor="comment">Comment</Label> */}
                    <Textarea name="content" className="shadow-none border-none active:outline-none focus-visible:ring-0" placeholder="Şərh bildir..." />
                    {!!state?.errors?.content && (
                        <p className="text-red-500 animate-shake">
                            {state.errors.content}
                        </p>
                    )}
                    <Button type="submit" className="bg-orange-500 hover:bg-white hover:text-orange-700 transition-all duration-300 w-[30%] mt-4">Əlavə et</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateComment