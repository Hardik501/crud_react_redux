import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function TaskForm(){
  let [task, setTask] = useState('Add task');
  const dispatch = useDispatch();
  const handletaskInput = (e) =>{
    setTask(e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        id: new Date(),
        task,
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
   <button>Add Task</button>
  </form>
</div>
);
}
export default TaskForm;