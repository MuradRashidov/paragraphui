import React, { PropsWithChildren, ReactNode } from 'react'
type Props = PropsWithChildren<{
    modal: ReactNode
}>
const PostsLayout = ({ modal, children }: Props) => {
    return (
        <div className="w-[100%]">
            <div className="w-full">{children}</div>
            <div>{modal}</div>
        </div>
    )
}

export default PostsLayout