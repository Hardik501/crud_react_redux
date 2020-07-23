import React from 'react';
import { useDispatch } from "react-redux";

function Task(props){
    const dispatch = useDispatch();
    const style = {color:'blue'};
    const handleclick = (e)=>{
        e.target.style.color = e.target.style.color ==='blue'?'green':'blue';
        //style.color = style.color ==='blue'?'red':'blue';
    }
        return(
            <div>
                <h4 style={style} onClick={handleclick}>{props.task.task}</h4>
                <p>{props.number}</p>
                <p>{props.pass}</p>
                <button
                onClick={()=>dispatch({type:'EDIT_TASK', id:props.task.id})}>
                Edit</button>
                <button
                onClick={()=>dispatch({type:'DELETE_TASK',id:props.task.id})}
                >Delete</button>
            </div>
        );
}

export default Task;