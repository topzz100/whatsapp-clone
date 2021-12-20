import { AttachFile, InsertEmoticon, MessageSharp, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, {useState, useEffect} from'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { useStateValue } from './AppProvider'
import firebase from 'firebase/compat'

const Chat = () => {
  const[state, setState] = useState('')
  const {roomId} = useParams()
  const[roomName, setroomName] = useState('')
  const[messages, setMessages] = useState([])
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
        setroomName(snapshot.data().name);

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
          setMessages(snapshot.docs.map((doc) => doc.data()))
        ))
      })
    }
  },[roomId])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)

    db.collection('rooms').doc(roomId).collection('messages').add({
      message: state,
      name: user.displayName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setState('')
  }

  return <div className = "chat">
    <div className="chat-header">
      <Avatar/>
      <div className="chat-header-info">
        <h3>{roomName}</h3>
        <p>last seen {new Date(
          messages[messages.length-1]?.timestamp?.toDate()
        ).toUTCString()}</p>
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
      {messages.map((message) => {
       return  (<div className = {`message ${message.name === user.displayName && 'receiver'}`}>
        <h4 className="name">{message.name}</h4>
        <p>{message.message}</p>
        <h4 className="time-stamp">
          {new Date(message.timestamp?.toDate()).toUTCString()}
        </h4>
      </div>)
      })}
     
       {/* <div className = "message receiver">
        <h4 className="name">John watts</h4>
        <p>sending a message</p>
        <h4 className="time-stamp"> 3:30pm</h4>
      </div> */}
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