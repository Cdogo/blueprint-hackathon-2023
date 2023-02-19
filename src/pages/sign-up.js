import React, {useState} from "react";

import { useRouter } from "next/router";
import { Link } from "next/link"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from "@/components/firebase";


export default function SignUp(){
    let [user] = useAuthState(auth)

    const router = useRouter()

    if(user !== null){
        router.push('/')
    }

    const onSignUpSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
          }).catch((error) => {
            const errorCode = error.code.split('/')[1];
            console.log(errorCode)})
        return 0;
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <main>
            <form onSubmit = {onSignUpSubmit} className = 'max-w-[300px] w-full m-auto flex flex-col gap-1 md:mt-5 mt-1'>
                <label className = 'font-bold '>Sign Up</label>
                <input className = 'border outline-none w-full p-3 border-gray-300 rounded-lg' type = 'text' value = {username} onChange = {(e) =>{setUsername(e.target.value)}} placeholder='email'/>
                <input className = 'border outline-none w-full p-3 border-gray-300 rounded-lg' type = 'password' value = {password} onChange = {(e) =>{setPassword(e.target.value)}} placeholder='password'/>
                <input className = 'bg-[#FF5733] w-full p-3 font-bold text-white rounded-lg pointer' type = 'submit' value = 'Sign Up'/>
            </form>
            
        </main>
    )
}