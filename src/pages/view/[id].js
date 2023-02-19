import React, {useState} from "react";

import { useRouter } from "next/router"

import CommentFeed from "@/components/comments/CommentFeed";

import { db } from "@/components/firebase";

export default function ViewPage(){
    const router = useRouter()
    const { id } = router.query

    const [website, setWebsite] = useState('')

    db.collection("websites").doc(id).get().then(
        (doc) => {
          if (doc.exists){
            console.log(doc.data())
            setWebsite(doc.data().link)
          } else {
            console.log('Not Found')
          }
        }
      );



    return (
    <main className = 'h-full'>
        <CommentFeed id = {id}/>
        <iframe src = {website} className = 'w-screen h-screen min-h-screen'></iframe>
    </main>)
}