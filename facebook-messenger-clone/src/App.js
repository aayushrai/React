import React, { useState, useEffect } from 'react';
import {FormControl,Input,} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input,setInput] =   useState('');
  const [messages, setMessages] = useState([]);
  const [username,setUsername] = useState('');

  //useState => is variable is react
  //userEffect => run code on a condition

useEffect(() => {
  db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
  })
},[])

  useEffect(() => {
      setUsername(prompt("Please enter your name: "));
  }, [])

  const sendMessage = (event) =>{
      event.preventDefault();
      db.collection("messages").add({
        message:input,
        username:username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }) 
      setInput("");
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"alt="#"></img>
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
     
      <form className="app__form">
      <FormControl className="app__formControl"> 
        <Input className="app__input" placeholder="Enter your message here......" value={input}  onChange={e => (setInput(e.target.value))} id="my-input" aria-describedby="my-helper-text" />
        <IconButton className="app__iconButton" disabled={!input} type="submit" variant="contained" color="primary" onClick={sendMessage}><SendIcon/></IconButton>
      </FormControl>
      </form>
    <FlipMove>
       {
         messages.map(({id,message}) => (
            <Message key={id} currentUser={username} message={message} />
         ))

        }
    </FlipMove>
           </div>
  );
}

export default App;