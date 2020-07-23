import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function EditComponent(props){
    const [newtask, setTask] = useState('Add task');
    const dispatch = useDispatch();
    const handletaskInput = (e) =>{
        console.log(e.target.value)
        setTask(e.target.value)
      }
    const handleEdit = (e)=>{
        e.preventDefault();
        const data={
            newtask
        }
        dispatch({type:'UPDATE', id: props.task.id, data:data});
    }
        return(
            <div>
                <form onSubmit={handleEdit}>
                   <input required type="text" onChange={handletaskInput}
                    defaultValue={props.task.task} placeholder="Enter Task" />
                    <button>Update</button>
                </form>
            </div>
        );
}
export default EditComponent;