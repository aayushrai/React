import React from 'react'
import './Todo.css';
import {List,ListItemText,ListItem,ListItemAvatar} from '@material-ui/core';

function Todo(props) {
    return (
        <div>
            <List class="todo_list">
                <ListItem>
                    <ListItemAvatar></ListItemAvatar>
                    <ListItemText primary={props.text} secondary="dummy deadline" />
                </ListItem>
            </List> 
        </div>
    )
}

export default Todo;
