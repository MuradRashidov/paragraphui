"use client"
import { cn } from '@/lib/utils';
import React, { PropsWithChildren, ReactNode, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';

type Props = PropsWithChildren<{
    triggerIcon: ReactNode;
    triggerClassName?: string;
}>;

const Sidebar = (props: Props) => {
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null!); // ✅ null olmama garantisi verildi

    useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setShow(false)); // ✅ Tip uyumsuzluğu çözüldü

    return (
        <>
            <button className={props.triggerClassName} onClick={() => setShow((prev) => !prev)}>
                {props.triggerIcon}
            </button>
            <div 
                ref={ref} 
                className={cn("w-60 absolute top-0 duration-300 z-50 transition-all bg-white rounded-r-md min-h-screen", {
                    "-left-full": !show,
                    "left-0": show
                })}
            >
                {props.children}
            </div>
        </>
    );
}

export default Sidebar;
