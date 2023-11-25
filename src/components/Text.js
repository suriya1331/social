import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Text = ({newItem,setNewItem,submit}) => {
  return (
    <div>
        <form onSubmit={submit}>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',mt:'20px'}}>

        <TextField type='text' placeholder='Add Item' required
        value={newItem} onChange={(e)=>setNewItem(e.target.value)}
         sx={{border:'2px solid black',borderRadius:'10px'}}/> 

        <Button> <AddIcon/> </Button>
        </Box>
        </form>
    </div>
  )
}

export default Text