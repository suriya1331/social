import { Box, Button, Grid, Link, ListItemText, Typography } from '@mui/material'
import React, {useState}from 'react'

const array = ['/image/1.jpg','/image/2.jpg']
const MainMenu = () => {
    const [add, setAdd] = useState(0)
    const [content, setContent] = useState("surya")
    const [file, setFile] = useState([{id:1,check:true,image:'/image/1.jpg'},{id:2,check:false,image:'/image/2.jpg'}])


    const click = ()=>{
        if(add<array.length-1){
            setAdd(add+1)
        }else{
            setAdd(0)
        }
       
    }

    const handle = (sum)=>{

        const names = ["earn","grow","give"]
        const int = Math.floor(Math.random()*3)
         return `${sum(names[int])}`
        
        //console.log(`hello my fellow followers ${name}`)
    }

    const handlechange = (id)=>{
           const newVal = file.map((item)=>item.id===id ? {...item,check:!item.check}:item)
           setFile(newVal)
    }
  return (
    <div>

        
        <Typography variant='h4'>let {content} money</Typography>
        <Button onChange={()=> handle (setContent)}>add</Button>



        <Button>-</Button> 
        
        {/* <Button onClick={click}>+</Button>
        <Box  sx={{height:'700px',width:'80%',backgroundImage:`url(${array[add]})`,backgroundSize:'cover',backgroundPosition:'center'}}>

        </Box> */}

        {file.map((props)=>(
            <Box sx={{height:'700px',width:'80%',backgroundImage:`url(${props.image})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                <Button onClick={()=>handlechange(props.id)}>
                    +
                </Button>
            </Box>
        ))}

       
    </div>
  )
}

export default MainMenu