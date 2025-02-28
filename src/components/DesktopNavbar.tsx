"use client"
import { cn } from '@/lib/utils';
import React, { PropsWithChildren, useEffect, useState } from 'react'
type Props = PropsWithChildren;
const DesktopNavbar = (props: Props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }
    const isScrollDown = scrollPosition > 10
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <nav className={cn("fixed top-0 left-0 hidden bg-orange-500 md:block w-full z-50 transition-all",{"bg-white text-gray-700 shadow-md":isScrollDown})}>
            <div className="flex items-center p-4 container">
                {props.children}
            </div>
            <hr className="border-b border-gray-100 opacity-25" />
        </nav>
    )
}

export default DesktopNavbar