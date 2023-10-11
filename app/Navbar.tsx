'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames';


const Navbar = () => {

    const links = [
        {label: "Dashboard", href:"/"},
        {label: "Issue", href:"/issues"}
    ]

    const currentPath = usePathname();
    console.log("currentPath");
  return (
    <nav className='flex space-x-6 px-5 border-b mb-5 h-14 items-center'>
      <Link href="/"><AiFillBug /></Link>
        <ul className='flex space-x-6'>
         {links.map(link => 
            <Link 
              key={link.href} 
                className={classnames({
                 'text-zinc-900': link.href === currentPath,
                 'text-zinc-500': link.href !== currentPath,
                 'hover:text-zinc-800 transition-colors': true
                })} 
              href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar
