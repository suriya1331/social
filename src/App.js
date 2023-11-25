
// import { BrowserRouter, Route, Router, Routes, json } from 'react-router-dom'
import {useState} from 'react'
import MainMenu from './components/MainMenu';
import ListAndKeys from './components/ListAndKeys';
import Test from './components/Test';
import Header from './components/Header';
import Text from './components/Text';
import ColorBox from './components/ColorBox';
import Input from './components/Input';
import { Button } from '@mui/material';

function App() {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem("To_Do")))
  const [newItem, setNewItem] = useState('')

  const [colorValue, setColorValue] = useState('')
  const [hexvalue, setHexvalue] = useState('')
  const [dark, setDark] = useState(true)


//   const addItem = (item)=>{
//     const id = events.length ? events[events.length -1].id +1 : 1;
//     const addNewItem = {id,check:false,item}
//     const listNew = [...events,addNewItem]
//     setEvents(listNew)
//     localStorage.setItem("To_Do",JSON.stringify(listNew))
//   }

//   const handlechange = (id)=>{
      
//          const newVal = events.map((newState)=>newState.id===id ? {...newState,check:!newState.check}:newState)
//           setEvents(newVal)
//           localStorage.setItem("To_Do",JSON.stringify(newVal))
     
//   }

//   const handleDelete = (id)=>{
//     const listItem = events.filter((item)=>item.id!==id)
//     setEvents(listItem)
//     localStorage.setItem("To_Do",JSON.stringify(listItem))
//   }

//  const submit = (e)=>{
//   e.preventDefault()
//   if(!newItem)return;
//       addItem(newItem)
//       setNewItem('')
    
//  }
  return (
    <div className="App">
      <ColorBox 
      colorValue = {colorValue}
      hexvalue= {hexvalue}
      dark = {dark}
      />

      <Input
      colorValue = {colorValue}
      setColorValue = {setColorValue}
      setHexvalue = {setHexvalue}
      dark = {dark}
      setDark = {setDark}
      />
      {/* <Header/>
      <Text
      newItem = {newItem}
      setNewItem = {setNewItem}
      submit = {submit}
      />
      <Test 
        events = {events}
        handlechange= {handlechange}
        handleDelete={handleDelete}
        /> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/menu' element={<MainMenu/>}exact/>
        <Route  path='/list' element={<ListAndKeys title="surya"/>}exact />
        
      </Routes>
      </BrowserRouter> */}
         
        <Button>
          <a href='surya'>link</a>
        </Button>
    </div>
  );
}

export default App;
