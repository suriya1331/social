import { Button, TextField } from '@mui/material'
import React from 'react'


const Input = ({colorvalue,setColorValue,setHexvalue,dark,setDark}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <TextField type='text' placeholder='enter color name'
         value={colorvalue}
          onChange={(e)=>{setColorValue(e.target.value); setHexvalue(e.target.value)
    
        }}
          
          />

          <Button onClick={()=>setDark(!dark)}> toggle </Button>
    </form>
  )
}

export default Input