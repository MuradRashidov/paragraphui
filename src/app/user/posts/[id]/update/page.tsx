import { fetchPostById } from '@/lib/actions/postAction';
import React from 'react'
import UpdatePostContainer from './_components/UpdatePostContainer';
type Props = {
    params: Promise<{ id: string }>
}
const page = async ({ params }: Props) => {
    const { id } = await params;
    const {post} = await fetchPostById(+id);
    return (
        <div className="w-[90%] mx-auto md:w-[100%] mt-8">
            <UpdatePostContainer post={post}/>
        </div>
    )
}

export default page