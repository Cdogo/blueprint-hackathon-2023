import { getDatabase } from "firebase/database";
import React, { Component, useState} from 'react';
import firebase from "./firebase";


export default function Post({description, username, website}){
  return (
    <div>
      <iframe src = {website} title = "websiteLink"></iframe>
      <p>Description: {description}</p>
      <p>User: {username}</p>
    </div>
  );
}