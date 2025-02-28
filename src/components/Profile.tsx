import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SessionUser } from '@/lib/session'
import { ArrowRightStartOnRectangleIcon, ListBulletIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/16/solid'
import { ArrowsRightLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

type Props = {
    user: SessionUser
}
const Profile = ({ user }: Props) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Avatar>
                    <AvatarImage className="rounded-full w-14 border-white" src={user.avatar} />
                    <AvatarFallback>
                        <UserIcon />
                    </AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent>
                <div>
                    <div className="flex items-center justify-center gap-4">
                        <UserIcon className="w-4" />
                        {user.name}
                        <div className="border-t bg-gray-600" />
                    </div>
                    <div 
                     className="*:grid *:grid-cols-5 *:gap-3 *:my-2 *:py-2 [&>*]:items-center [&>*>span]:col-span-4 [&>*:hover]:bg-orange-400 *:transition *:rounded-md [&>*:hover]:text-white [&>*>*:nth-child(1)]:justify-self-end">
                        <a href="/api/auth/signout">
                           <ArrowRightStartOnRectangleIcon className="w-4"/>
                           <span> Sign Out</span>
                        </a>
                        <Link href="/user/create-post">
                           <PencilSquareIcon className="w-4"/>
                           <span>Yeni Post</span>
                        </Link>
                        <Link href="/user/posts">
                           <ListBulletIcon className="w-4"/>
                           <span>Postlarım</span>
                        </Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Profile