import { deleteSession, getSession } from '@/lib/session'
import Link from 'next/link'
import React from 'react'
import SignInPanel from './SignInPanel';
import Profile from './Profile';

const Navbar = async () => {
    const session = await getSession();
    return (
        <>
            <h1 className="font-bold p-2 text-2xl">Paragraph Logo</h1>
            <div className="flex flex-col md:flex-row ml-auto gap-2 [&>a]:transition  [&>a]:rounded-md [&>a:hover]:text-orange-100 [&>a:hover]:bg-orange-400 [&>a]:px-4 [&>a]:py-2">
                <Link href="/">Blog</Link>
                <Link href="/about">Haqqımızda</Link>
                <Link href="/contact">Əlaqə</Link>
                {
                    session && session.user ?<div className="ml-4"><Profile user={session.user}/></div>:<SignInPanel/>
                }
            </div>
        </>
    )
}

export default Navbar