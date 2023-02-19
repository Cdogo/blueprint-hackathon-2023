import React, {useState, useEffect} from "react";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from "./firebase";

import { collection, query, where, limit, orderBy, getDocs, startAfter } from "firebase/firestore";

import Post from "./post"

export default function Feed(){
    const [posts] = useCollectionData(query(collection(db, 'websites')), { idField: 'id' })

    return(<div>
        {posts && posts.map((post) => {return(<Post key = {post.id} username = {post.user} website = {post.link}/>)})}
    </div>)
}