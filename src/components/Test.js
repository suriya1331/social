
import React from 'react'
import { useState } from 'react'
import Child from './Child'



const Test = ({events,handlechange,handleDelete}) => {
   
  return (
    <div>
        {(events.length) ? (
       <Child
       events = {events}
       handlechange= {handlechange}
       handleDelete={handleDelete}
       />
        ):(
            <p>ypur list is empty</p>
        )}
    </div>
  )
}

export default Test