import React, {useState, useRef} from "react";

import { useRouter } from "next/router"

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
            console.log(document.getElementById('website').contentWindow.document.body.scrollHeight)
          } else {
            console.log('Not Found')
          }
        }
      );

    const iframeRef = useRef(null)
    console.log(iframeRef.currentWindow)

    
    return (
    <main className = 'h-full'>
        <button className = {`w-full h-full min-h-screen`}>
            <iframe id = 'website' src = {website} height='100%' width = '100%' seamless></iframe>
        </button>
    </main>)
}