"use client"
import { getPostLikeData, likePost, unlikePost } from '@/lib/actions/like'
import { SessionUser } from '@/lib/session'
import { useMutation, useQuery } from '@tanstack/react-query'
import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/20/solid'
import React from 'react'

type Props = {
    postId: number,
    user?: SessionUser
}
const Like = ({
    postId,
    user
}: Props) => {
    const { data, refetch: refetchPostLikeData } = useQuery({
        queryKey: ["GET_POST_LIKE_DATA", postId],
        queryFn: async () => await getPostLikeData(+postId)
    })

    const likePostMutation = useMutation({
        mutationFn: async () => await likePost(+postId),
        onSuccess: () => refetchPostLikeData()     
    })
    const unlikePostMutation = useMutation({
        mutationFn: async () => await unlikePost(+postId),
        onSuccess: () => refetchPostLikeData()     
    })
    return (
        <div className="flex mx-6 my-10 gap-2 items-center z-50 ml-10 justify-end [&>*]:self-end">
            {
                data?.userLikedPost ? (
                    <button onClick={() => unlikePostMutation.mutate()}>
                        <SolidHeartIcon className="w-8" />
                    </button>
                ) : (
                    <button onClick={() => likePostMutation.mutate()}>
                        <HeartIcon className="w-8" />
                    </button>
                )
            }
            <p>{data?.likeCount}</p>
        </div>
    )
}

export default Like