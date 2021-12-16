import { Avatar } from '@mui/material';
import React from 'react';

import './SideBarChat.css'

const SideBarChat = ({addNewChat}) => {

  const createChat = () => {

  }
  return !addNewChat ? (
    <div className = "sideBarChat">
      <Avatar/>
      <div className="sideBarChat-info">
        <h2> Room name</h2>
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
