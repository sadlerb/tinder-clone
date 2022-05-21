import React from 'react'
import "../CSS/SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';


function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton className='swipeButtons--repeat' id='swipeButtons'> 
            <ReplayIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons--left' id='swipeButtons'> 
            <CloseIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons--star' id='swipeButtons'> 
            <StarIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons--right' id='swipeButtons'> 
            <FavoriteIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons--lightning' id='swipeButtons'> 
            <FlashOnIcon fontSize='large'/>
        </IconButton>
        
    </div>
  )
}

export default SwipeButtons 