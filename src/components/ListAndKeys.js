import { Button, FormLabel, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const ListAndKeys = ({title}) => {

    const [test, setTest] = useState(
        [{id:12,checked:true,item:"games"},{id:1,checked:false,item:"happy"}]
    )

    // const array = [-2,4,5,67,9]
    // const item = array.filter(n=> n>=0).map((n)=>({number:n}))
    // console.log(item)

    
    const handlecheck = (id)=>{
            const listItem = test.map((newState)=>newState.id===id ?{...newState ,checked:!newState.checked}:newState)
            setTest(listItem)
    }
  return (
    <div>
        <h2> welcome back {title} </h2>
        <ul>
            {test.map((props)=>(
                <li key={props.id}>
                    <input type='checkbox' onChange={()=>handlecheck(props.id)} checked ={props.checked} />
                    <FormLabel> {props.item} </FormLabel>
                    {/* <label> {props.item} </label> */}
                    <Button>delete</Button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListAndKeys