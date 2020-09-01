import React,{useState, useEffect} from 'react';
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    console.log(input);

// when the app loads, we need to listen to the database and fetch new todos as they get added/removed
useEffect(()=>{
    //this load when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
        console.log(snapshot.docs.map(doc => doc.data()));
        setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
    }) 
},[]);

    const addTodo = (event) => {
        //this function call when we click
        event.preventDefault();
        db.collection('todos').add({
            todo:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("add click");
        setTodos([...todos,input]);
        setInput(""); //clear input after clicking todo and enter
    
    }
    return (
    <div class="App">
        <h1>Hello this is edith!</h1>

        <form>
            <FormControl>
                <InputLabel>Write ToDo</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)}/>
            </FormControl>

            <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        </form>
        
        <ul>
            {todos.map(todo => (
                <Todo text={todo}></Todo>
            ))}
            <li></li>
        </ul>   
    </div>
  );
}

export default App;
