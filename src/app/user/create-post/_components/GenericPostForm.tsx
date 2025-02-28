"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PostFormState } from '@/lib/types/formState';
import { Label } from '@radix-ui/react-label';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
    type?: string,
    state: PostFormState,
    formAction: (formdata: FormData) => void
}

const GenericPostForm = ({ state, formAction,type="Paylaş" }: Props) => {
    const [imageUrl, setImageUrl] = useState("");
    const { toast } = useToast();
    useEffect(() => {
        state?.message && toast({
            title: state.ok ? "success" : "Oops",
            description: state.message
        })
    }, [state])
    return (
        <form className="[&>*]:w-full flex flex-col justify-center items-center gap-4 shadow-md border p-4 rounded-md" action={formAction}>
            <div>
                <input name="postId" hidden value={state?.data?.postId || ""} onChange={() => null}/>
            </div>
            <div>
                <Label htmlFor="title">Başlıq</Label>
                <Input name="title" placeholder="Başlıq əlavə edin..." defaultValue={state?.data?.title} />
            </div>
            {!!state?.errors?.title && (
                <p className="text-red-500 animate-shake">{state.errors.title}</p>
            )}
            <div>
                <Label htmlFor="content">Məzmun</Label>
                <Textarea name="content" placeholder="Məzmun..." defaultValue={state?.data?.content} />
            </div>
            {!!state?.errors?.content && (
                <p className="text-red-500 animate-shake">{state.errors.content}</p>
            )}
            <div className="">
                <Label htmlFor="image">Fayl seçin</Label>
                <Input
                    type="file"
                    accept="image/*"
                    name="thumbnail"
                    onChange={(e) => {
                        e.target.files && setImageUrl(URL.createObjectURL(e.target.files[0]))
                    }}
                />
                {(!!imageUrl || !!state?.data?.previousThumbnailUrl) && 
                    <Image className="my-2" src={imageUrl || state?.data?.previousThumbnailUrl || " "} width={200} height={200} alt="image" />
                }
            </div>
            {!!state?.errors?.thumbnail && (
                <p className="text-red-500 animate-shake">{state.errors.thumbnail}</p>
            )}
            <div>
                <Label htmlFor="tags">Tags</Label>
                <Input name="tags" placeholder="Tag dəyərlərini  ',' ilə ayırın!" defaultValue={state?.data?.tags} />
            </div>
            {!!state?.errors?.tags && (
                <p className="text-red-500 animate-shake">{state.errors.tags}</p>
            )}
            <div className="flex gap-4 items-center">
                <input className="h-4 w-4" name="published" type="checkbox" defaultChecked={state?.data?.published === "on" ? true : false}
                />
                <Label htmlFor="published">Published Now</Label>
            </div>
            {!!state?.errors?.isPublished && (
                <p className="text-red-500 animate-shake">{state.errors.isPublished}</p>
            )}
            <Button>{type}</Button>
        </form>
    );
};

export default GenericPostForm;