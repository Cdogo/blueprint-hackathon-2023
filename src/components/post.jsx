import { getDatabase } from "firebase/database";
import React, { Component, useState} from 'react';
import firebase from "./firebase";


export default function Post({username, website}){
  return (
    <div>
      <iframe src = {website} title = "websiteLink"></iframe>
      <p>User: {username}</p>
    </div>
  );
}