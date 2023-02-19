import React, {useState, useEffect} from "react";

import { db, firestore } from "../firebase";

import { useCollectionData } from 'react-firebase-hooks/firestore';

import Comment from "./comment"
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from "@/components/firebase"

export default function CommentFeed({id}){

    let [user] = useAuthState(auth)

    const [comments] = useCollectionData(firestore.collection(`websites/${id}/comment`))

    const [comment, setComment] = useState('')
    const PostComment = async (e) => {
        e.preventDefault();
        const commentRef = firestore.collection(`websites/${id}/comment`);
        var currentdate = new Date();
        await commentRef.add({
            comment:comment,
            timeposted:`${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}`,
            username:user.email,
            userPicture:'https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg'
        })
        setComment('')
    }
    return(
        <div className = 'absolute right-5 top-7'>
            {user && <form onSubmit = {PostComment} className = 'flex flex-row justify-center items-center border border-gray-300 p-1 rounded-lg bg-white'>
                <textarea value = {comment} onChange = {(e)=>{setComment(e.target.value)}} className = 'resize-none p-1 outline-none border-none'></textarea>
                <input className = 'h-full' type = 'submit' value = 'Post Comment'/>
            </form>}
            <div className="mt-2 flex flex-col gap-2 max-h-[calc(100vh-150px)] overflow-y-auto">
                <h1 className = 'font-bold'>Comments</h1>
                {comments && comments.map((comment) => <Comment key = {comment.id} {...comment}/>)}
            </div>
        </div>
    )
}