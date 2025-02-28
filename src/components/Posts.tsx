import { Post } from '@/lib/types/modelTypes'
import React from 'react'
import PostCard from './PostCard'
import Pagination from './Pagination';
type Props = {
    posts: Post[],
    currentPage: number;
    totalPages: number;
}
const Posts = (props: Props) => {
    return (
        <section className="container m-8 max-w-5xl mx-auto">
            <h2 className="leading-tight font-bold text-5xl text-gray-800 text-center">
                Son paylaşılanlar
            </h2>
            <div className="h-1 mx-auto bg-gradient-to-br from-orange-400 to-orange-700 w-96 mb-9 rounded-t-md" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 w-full text-black">
                {
                    props.posts.map((post) => <PostCard key={post.id} {...post} />)
                }
            </div>
            <Pagination
                className="mt-4"
                currentPage={props.currentPage}
                totalPages={props.totalPages}
            />
        </section>
    )
}

export default Posts