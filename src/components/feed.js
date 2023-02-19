import React, {useState, useEffect} from "react";

import { useCollection } from 'react-firebase-hooks/firestore';
import { db, firestore } from "./firebase";

import Post from "./post"

export default function Feed(){
    const [posts] = useCollection(firestore.collection('websites').limit(25))
    return(<div className = 'w-full flex flex-col items-center gap-3'>
        {posts && posts.docs.map((post) => {return(<Post key = {post.id} id={post.id} username = {post.data().user} website = {post.data().link}/>)})}
    </div>)
}