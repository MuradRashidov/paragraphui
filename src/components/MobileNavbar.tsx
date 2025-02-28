import React, { PropsWithChildren } from 'react'
import Sidebar from './Sidebar'
import { Bars2Icon } from '@heroicons/react/16/solid';

type Props = PropsWithChildren;
const MobileNavbar = (props:Props) => {
  return (
    <div className="md:hidden z-10">
        <Sidebar 
        triggerIcon={<Bars2Icon className="w-4"/>}
        triggerClassName="absolute top-2 left-2"
        >
            {props.children}
        </Sidebar>
    </div>
  )
}

export default MobileNavbar