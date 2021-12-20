import { Avatar } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase'

import './SideBarChat.css'

const SideBarChat = ({id, name, addNewChat}) => {
   const [messages, setMessages] = useState('')

  useEffect(() => {
    if(id){
      db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => 
          doc.data()
        ))
      })
    }
  },[id])

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
        <p>{messages[0]?.message}</p>
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
