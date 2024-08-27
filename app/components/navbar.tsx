"use client"
import { useState } from "react";
import { Bars4Icon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar(){
    
    const [searchInput, setSearchInput] = useState('');
    // console.log(searchInput)
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    const {user} = useUser();

    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 sm:px-10 md:px-10">
            <div className="text-black relative flex items-center h-10 cursor-pointer my-auto space-x-5 p-5 px-10">
                <h1 className="text-gray-500 text-5xl relative flex items-center h-10 cursor-pointer">
                    <Link href="/">EIKA</Link>
                </h1>
                <h1 className="rounded-lg border border-transparent p-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-purple-400 hover:dark:bg-neutral-800/30">
                    <Link href="/PDS" className="block w-full h-full"> PDS </Link>
                </h1>
                <h1 className="rounded-lg border border-transparent p-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-purple-400 hover:dark:bg-neutral-800/30">
                    CONTACT
                </h1>
                <h1 className="rounded-lg border border-transparent p-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-purple-400 hover:dark:bg-neutral-800/30">
                    ABOUT
                </h1>
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 shadow">
                <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-black" type="text" placeholder="Find the next superstar"/>
                <MagnifyingGlassIcon  className="h-8 hidden md:inline-flex bg-violet-400 text-white  rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>
            <div className="relative">
                <div className="flex items-center space-x-4 justify-end text-gray-500"
                   >
                    <div className="flex items-center space-x-2 border p-2 bg-violet-700 rounded-full cursor-pointer">
                    <Bars4Icon className='h-6 text-white cursor-pointer '  
                               onClick={toggleDropdown}/>
                    <UserCircleIcon className='h-6  text-white cursor-pointer'/>
                    </div>
                </div>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg text-gray-500 ">
                        {user ? (
                        <ul className="py-1">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                            countries  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                            <Link href="/api/auth/logout">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                            </Link>
                        </ul>
                        ) : (
                        <ul className="py-1">
                            <Link href="/api/auth/login">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Log In</li>
                            </Link>
                            
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >User Role</li>
                        </ul>
                        )}
                    </div>
                    )}
            </div>
        </header>
    )
}