import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function TaskForm(){
  let [task, setTask] = useState('Add task');
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
  const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        id: new Date(),
        task,
        number,
        pass,
        editing:false
      }
      dispatch({
          type:'ADD_TASK',
          data});
      task = '';
        
    }
return (
<div>
  <h1>Create task</h1>
  <form onSubmit={handleSubmit}>
  <input required type="text" onChange={handletaskInput} placeholder="Enter Task"/><br></br>
  <label> <br/>Enter number:
  <input required type="number" name="number" onChange={handleNo}/>
  </label><br/><br/>
  <label> Enter password:
  <input required type="password" name="password" onChange={handlePass}/>
  </label><br/>
   <button>Add Task</button>
  </form>
</div>
);
}
export default TaskForm;