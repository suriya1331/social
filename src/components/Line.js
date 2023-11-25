import React from 'react'
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Line = ({props,handleDelete,handlechange}) => {
  return (
<div>
    <Box  sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px',backgroundColor:'white'}}>
  <FormControlLabel key={props.id} onChange={()=>handlechange(props.id)}
   control={<Checkbox checked= {props.check}  />} 
   label={props.item} sx={{display:'flex',justifyContent:'space-between',padding:'5px'}}/>
    
   
   <Button onClick={()=>handleDelete(props.id)} > <DeleteIcon/> </Button>
    
   </Box>

    {/* <li key={props.id}>
            <input type='checkbox' onChange={()=>handlechange(props.id)} checked={props.check}></input>
            <label> {props.name} </label>
            <Button onClick={()=>handleDelete(props.id)}>delete</Button>
        </li> */}
        
        </div>  
        
  )
}

export default Line