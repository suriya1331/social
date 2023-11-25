import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box sx={{height:'100px',width:'100%',backgroundColor:'blue'}}>
        <Typography sx={{position:'absolute',top:'20px',left:'600px'}} variant='h3'>To Do List</Typography>
    </Box>
  )
}

export default Header