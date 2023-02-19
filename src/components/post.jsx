import Link from 'next/link';

import React from 'react';


export default function Post({id, username, website}){
  return (
    <Link href={`/view/${id}`} className = 'block max-w-screen-md w-full border border-gray-300 p-3 rounded-lg'>
      <p>{username}</p>
      <iframe src = {website} title = "websiteLink" className = 'w-full'></iframe>
    </Link>
  );
}