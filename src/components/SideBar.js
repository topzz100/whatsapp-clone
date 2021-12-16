import React from 'react'

import  SideBarChat from './SideBarChat';

import { Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import DonutLargeIcon from '@mui/icons-material/DonutLarge'; 

import './SideBar.css';
import { SearchOutlined } from '@mui/icons-material';

const SideBar = () => {
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
        <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/>
      </div>
      <div></div>
    </div>
  )
}

export default SideBar
