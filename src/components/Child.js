import React from 'react'
import Line from './Line'
import { FormGroup } from '@mui/material'

const Child = ({events,handlechange,handleDelete}) => {
  return (
    <FormGroup  sx={{display:'flex',flexDirection:'column',justifyContent:'center'
    ,padding:'20px'
    ,alignItems:'center',mt:'100px'}}>
    {events.map((props)=>(
        <Line
        props = {props}
       handlechange= {handlechange}
       handleDelete={handleDelete}
        />
    ))}
</FormGroup>
  )
}

export default Child