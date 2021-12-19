import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase'

import './SideBarChat.css'

const SideBarChat = ({id, name, addNewChat}) => {

  const createChat = () => {
    const roomName = prompt("please enter name for chat room")
    if(roomName){
      db.collection('rooms').add({
        name : roomName,
      })
    }
  }
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
       <div className = "sideBarChat">
      <Avatar/>
      <div className="sideBarChat-info">
        <h2>{name}</h2>
        <p>last message...</p>
      </div>
    </div>
    </Link>
  ): (
    <div className="sideBarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
   
  )
  
}

export default SideBarChat
