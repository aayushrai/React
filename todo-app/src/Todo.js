import React, { useState } from 'react'
import './Todo.css';
import {Button,List,ListItemText,ListItem,ListItemAvatar,Modal} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input,setInput] = useState('');
    const updateTodo = () => {
        db.collection('todos').doc(props.text.id).set({
            todo:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        },{merge:true})
        setOpen(false);
    }
    
      
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Update Todo</h1>
                    <input value={input} placeholder={props.text.todo} onChange={e => setInput(e.target.value)} />
                
                    <Button onClick={updateTodo}>Update</Button>
                </div>
            </Modal>
            <List class="todo_list">
                <ListItem>
                    <ListItemAvatar></ListItemAvatar>
                    <ListItemText primary={props.text.todo} secondary="dummy deadline" />
                </ListItem>
                <Button onClick={event => (setOpen(true))}>Edit</Button>
                <DeleteForeverIcon onClick={event => db.collection("todos").doc(props.text.id).delete()}></DeleteForeverIcon>
            </List> 
        </>
    )   
}

export default Todo;
