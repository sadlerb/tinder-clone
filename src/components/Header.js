import React from 'react'
import "../CSS/Header.css"
import Profile from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <Profile className='header--icon' fontSize='large'/>
        </IconButton>

        <img src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' alt='tinder' className='header--logo'/>

        
        <IconButton>
            <ForumIcon  className='header--icon'/>
        </IconButton>
    </div>
  )
}

export default Header