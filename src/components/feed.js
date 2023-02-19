import React, {useState, useEffect} from "react";

import firebase from 'firebase/compat/app'

import { db } from "./firebase";

import { collection, query, where, limit, orderBy, getDocs, startAfter } from "firebase/firestore";

import Post from "./post"

export default function Feed(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(query(collection(db, 'websites')))
            let predata = []
            data.forEach((doc) => {
                predata.push({id:doc.id, ...doc.data()})
            })
            console.log(predata)
            setPosts(predata)    
            console.log(posts);
            
        }
        getData()
    }, [posts])

    return(<div>
        {posts.length !== 0 && posts.map((post) => {return(<Post key = {post.id} username = {post.user} website = {post.link}/>)})}
    </div>)
}