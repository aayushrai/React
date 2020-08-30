import React,{useState} from 'react';
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Todo from './Todo';
function App() {
    const [todos, setTodos] = useState(["Play game","take dog to walk"]);
    const [input, setInput] = useState('');
    console.log(input);

    const addTodo = (event) => {
        //this function call when we click
        event.preventDefault();
        console.log("add click");
        setTodos([...todos,input]);
        setInput(""); //clear input after clicking todo and enter
    
    }
    return (
    <div class="App">
        <h1>Hello this is edith! {1+2}</h1>

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
