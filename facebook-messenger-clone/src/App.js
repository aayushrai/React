import React, { useState, useEffect } from 'react';
import {Button,FormControl,InputLabel,Input,} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';

function App() {
  const [input,setInput] =   useState('');
  const [messages, setMessages] = useState([{username:"aayush rai",message:"Hii this is aayush"},{username:"mayank rai",message:"Hii this is mayank"}]);
  const [username,setUsername] = useState('');

  //useState => is variable is react
  //userEffect => run code on a condition

useEffect(() => {
  db.collection('message').onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => doc.data()))
  })
},[])

  useEffect(() => {
      setUsername(prompt("Please enter your name: "));
  }, [])

  const sendMessage = (event) =>{
      event.preventDefault();
      setMessages([...messages,{username:username,text:input}]);
      setInput("");
  }
  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
     
      <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input  value={input}  onChange={e => (setInput(e.target.value))} id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={sendMessage}>Send Message</Button>
      </form>

       {
         messages.map(msg => (
            <Message currentUser={username} message={msg} />
         ))

        }
           </div>
  );
}

export default App;