import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, {useState, useEffect} from'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import db from '../firebase'

const Chat = () => {
  const[state, setState] = useState('')
  const {roomId} = useParams()
  const[roomName, setroomName] = useState('')

  useEffect(() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
        setroomName(snapshot.data().name)
      })
    }
  },[roomId])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    setState('')
  }

  return <div className = "chat">
    <div className="chat-header">
      <Avatar/>
      <div className="chat-header-info">
        <h3>{roomName}</h3>
        <p>Last seen as...</p>
      </div>

      <div className="chat-header-right">
        <IconButton>
          <SearchOutlined/>
        </IconButton>
        <IconButton>
          <AttachFile/>
        </IconButton>
        <IconButton>
          <MoreVert/>
        </IconButton>
      </div>
    </div>
    <div className="chat-body">
      <div className = "message">
        <h4 className="name">John watts</h4>
        <p>sending a message</p>
        <h4 className="time-stamp"> 3:30pm</h4>
      </div>
       <div className = "message receiver">
        <h4 className="name">John watts</h4>
        <p>sending a message</p>
        <h4 className="time-stamp"> 3:30pm</h4>
      </div>
    </div>
    <div className="chat-footer">
      <InsertEmoticon/>
      <form>
        <input type="text" value = {state} onChange = {(e) => {setState(e.target.value)}}placeholder = "enter text"/>
        <button type="submit" onClick = {handleSubmit}>Enter</button>
      </form>
      <Mic/>
      
    </div>
    <h2>
      
    </h2>
  </div>
}

export default Chat