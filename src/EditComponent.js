import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function EditComponent(props){
    const [newtask, setTask] = useState('Add task');
    const [number, setnumber] = useState(0);
    const [pass, setPass] = useState('pass');
    const dispatch = useDispatch();
    const handletaskInput = (e) =>{
        setTask(e.target.value)
      }
    const handleNo = (e) =>{
       setnumber(e.target.value)
    }
    const handlePass = (e) =>{
        setPass(e.target.value)
    }
    const handleEdit = (e)=>{
        e.preventDefault();
        const data={
            newtask,
            number,
            pass
        }
        dispatch({type:'UPDATE', id: props.task.id, data:data});
    }
        return(
            <div>
                <form onSubmit={handleEdit}>
                   <input required type="text" onChange={handletaskInput}
                    defaultValue={props.task.task} placeholder="Enter Task" /><br/>
                    <label> <br/>Enter number:
                    <input required type="number" name="number" defaultValue={props.task.number} onChange={handleNo}/>
                    </label><br/><br/>
                    <label> Enter password:
                    <input required type="password" name="password" defaultValue={props.task.pass} onChange={handlePass}/>
                    </label><br/>
                    <button>Update</button>
                </form>
            </div>
        );
}
export default EditComponent;