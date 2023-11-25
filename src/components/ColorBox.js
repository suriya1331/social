import { Box } from '@mui/material'
import React, { useState } from 'react'

const ColorBox = ({colorValue,hexvalue,dark}) => {
  

  return (
    <Box sx={{height:'300px',width:'20%',backgroundColor:colorValue,color:dark ? "white":"black"    
    ,border:'2px solid black',display:'grid',placeContent:'center'
    
    }}>
        <p> {colorValue ? colorValue : "empty value"} </p>
        {/* <p> {hexvalue ? hexvalue : null} </p> */}

    </Box>
  )
}

export default ColorBox