import Link from 'next/link'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header(){
    return(
        <header className = {`fixed w-screen ${inter.className}`}>
            <div className = 'flex flex-row justify-between max-w-screen-xl md:px-5 m-auto text-lg'>
                <h1 className = 'w-fit'>ReWeb</h1>
                <nav className = 'flex gap-5'>
                    <Link className = 'block' href = '/login'>Login</Link>
                    <Link className = 'block' href = '/sign-up'>Sign Up</Link>
                </nav>
            </div>
        </header>)
}