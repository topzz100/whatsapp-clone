import React, { useState, useEffect } from 'react'

import  SideBarChat from './SideBarChat';

import { Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import DonutLargeIcon from '@mui/icons-material/DonutLarge'; 
import db from '../firebase.js'

import './SideBar.css';
import { SearchOutlined } from '@mui/icons-material';


const SideBar = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot =>{
      setRooms(snapshot.docs.map(doc => ({ 
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <div className = "sideBar">
      <div className = "sideBarHeader">
        <Avatar/>
        <div className = "sideBarHeaderRight">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
           <IconButton>
            <ChatIcon/>
          </IconButton>
           <IconButton>
            <MoreVertIcon/>
          </IconButton>
 
        </div>
      </div>
      <div className = "sideBarSearch">
        <div className ="sideBarSearchContainer">
          <SearchOutlined/>
          <input placeholder='Search' type = "text"/>
        </div>
          
      </div>
      <div className = "sideBarChats">
        <SideBarChat  addNewChat/>
        {rooms.map(room => {
          return <SideBarChat key={room.id} id={room.id} name={room.data.name}/>
        })}
      </div>
      <div></div>
    </div>
  )
}

export default SideBar
