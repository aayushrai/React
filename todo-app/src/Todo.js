import React from 'react'
import './Todo.css';
import {Button,List,ListItemText,ListItem,ListItemAvatar} from '@material-ui/core';
import db from './firebase';
function Todo(props) {
    return (
        <div>
            <List class="todo_list">
                <ListItem>
                    <ListItemAvatar></ListItemAvatar>
                    <ListItemText primary={props.text.todo} secondary="dummy deadline" />
                </ListItem>
                <Button onClick={event => db.collection("todos").doc(props.text.id).delete()}>Delete</Button>
            </List> 
        </div>
    )
}

export default Todo;
