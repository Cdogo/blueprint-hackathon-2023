import React, {useState} from "react";

import { useRouter } from "next/router";
import { Link } from "next/link"

import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from "@/components/firebase";

export default function Login({}){
    let [user] = useAuthState(auth)

    const router = useRouter()

    if(user !== null){
        router.push('/')
    }

    const onLoginSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
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

    return (
        <main>
            <form onSubmit={onLoginSubmit}>
                <input className = '' type = 'text' value = {username} onChange = {(e) =>{setUsername(e.target.value)}}/><br/>
                <input className = '' type = 'password' value = {password} onChange = {(e) =>{setPassword(e.target.value)}}/><br/>
                <input className = '' type = 'submit' value = 'Login'/>
            </form>
            
        </main>
    )
}