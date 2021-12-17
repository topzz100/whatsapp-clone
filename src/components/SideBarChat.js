import { Avatar } from '@mui/material';
import React from 'react';

import './SideBarChat.css'

const SideBarChat = ({id, name, addNewChat}) => {

  const createChat = () => {
    const roomName = prompt("please enter name for chat")
    if(roomName){}
  }
  return !addNewChat ? (
    <div className = "sideBarChat">
      <Avatar/>
      <div className="sideBarChat-info">
        <h2>{name}</h2>
        <p>last message...</p>
      </div>
    </div>
  ): (
    <div className="sideBarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SideBarChat
