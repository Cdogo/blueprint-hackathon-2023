import React, { Component } from 'react';

export default function Post({description, username}){
    return (
      <div>
        <a></a>
        <p>Description: {description}</p>
        <p>User: {username}</p>
     </div>
    );
  }