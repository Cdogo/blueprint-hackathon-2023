import React, {useState, useEffect} from "react";

import firebase from 'firebase/compat/app'

import { db } from "./firebase";

import { collection, query, where, limit, orderBy, getDocs, startAfter } from "firebase/firestore";

import Post from "./post"

export default function Feed(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(query(collection(db, 'websites'), limit(5)))
            data.forEach((doc) => {console.log({id:doc.id, ...doc.data()})})
            setPosts(data.forEach((doc) => {return({id:doc.id, ...doc.data()})}))
        }
        getData()
    }, [])

    return(<div></div>)
}