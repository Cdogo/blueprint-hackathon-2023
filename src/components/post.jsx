import { getDatabase } from "firebase/database";
import React, { Component, useState} from 'react';
import firebase from "./firebase";
import Link from 'next/link';

export default function Post({username, website, id}) {
  return (
    <div className="flex flex-row border-gray-300 rounded-lg border max-w-screen-lg w-full p-5 m-10 bg-white space-y-4">
      <p class = "text-decoration-thickness: 4px">{username}</p>
      <iframe class = "w-full" src = {website} title = "websiteLink"></iframe>
    </div>
  );
}