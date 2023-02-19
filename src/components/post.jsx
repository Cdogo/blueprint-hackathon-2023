import React, { Component } from 'react';
import Link from 'next/link'

export default function Post({description, username}){
    return (
      <div>
        
        <p>Description: {description}</p>
        <p>User: {username}</p>
     </div>
    );
  }