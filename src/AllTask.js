import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import EditComponent from './EditComponent';

function AllTask(state){
  return (
    <div>
      <h1>All Task</h1>
        {state.tasks.map((task)=>(
        <div key={task.id}>
          {task.editing?<EditComponent task={task} key={task.id}/>:<Task key={task.id} task={task}/>}
          { console.log(task)}
        </div>
      ))}
    </div>
  );
}


const mapStateToProps = (state)=>{
  return{
    tasks:state
  }
}

export default connect(mapStateToProps)(AllTask);