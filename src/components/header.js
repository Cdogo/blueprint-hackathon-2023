import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header(){
    return(
        <header className = {`fixed w-screen ${inter.className}`}>
            <div className = 'flex flex-row justify-between max-w-screen-xl md:px-5 m-auto'>
                <h1 className = 'w-fit'>Website Reviews</h1>
                <nav className = 'flex'>
                    <a className = 'block' href = '/login'>Login</a>
                    <a className = 'block' href = '/sign-up'>Sign Up</a>
                </nav>
            </div>
        </header>)
}