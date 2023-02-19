import Link from 'next/link'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from "@/components/firebase";

export default function Header(){
    let [user] = useAuthState(auth)
    return(
        <header className = {`fixed w-screen ${inter.className} pt-1 bg-white`}>
            <div className = 'flex flex-row justify-between max-w-screen-xl md:px-5 m-auto text-xl'>
                <Link href = '/'><h1 className = 'w-fit font-bold px-3 py-1'>ReWeb</h1></Link>
                <nav className = 'flex gap-5 text-xl'>
                    {user ? <Link onClick = {()=>{auth.signOut();}}className = 'block bg-[#FF5733] text-white px-3 py-1 rounded-lg font-bold' href = '/'>Sign Out</Link> : <><Link className = 'block bg-[#FF5733] text-white px-3 py-1 rounded-lg font-bold' href = '/login'>Login</Link>
                    <Link className = 'block bg-[#FF5733] text-white px-3 py-1 rounded-lg font-bold' href = '/sign-up'>Sign Up</Link></>}
                </nav>
            </div>
        </header>)
}