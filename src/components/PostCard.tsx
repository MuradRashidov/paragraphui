import { Post } from '@/lib/types/modelTypes'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
type Props = Partial<Post>;
const PostCard = ({ id, title, content, thumbnail, slug, createdAt }: Props) => {
    return (
        <div className="rounded-md shadow-sm flex flex-col bg-white overflow-hidden">
            <div className="relative h-72">
                <Image className="object-cover" src={thumbnail || "/no-image.png"} alt={title ?? ""} fill />
            </div>
            <div className="flex flex-col flex-grow p-6 bg-orange-200 opacity-75 justify-between">
                <h1 className="text-lg font-bold mt-4 break-words text-center text-gray-600">{title}</h1>
                <p className="mt-4 text-gray-500 text-sm">{new Date(createdAt ?? "").toLocaleString()}</p>
                <p className="mt-4 to-gray-700 break-words h-16">{content?.slice(1, 100)}...</p>
                <Link className="text-orange-600 hover:underline mt-6 block text-end" href={`/blog/${slug}/${id}`}>Read More...</Link>
            </div>
        </div>
    )
}

export default PostCard