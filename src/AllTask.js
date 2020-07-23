import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import EditComponent from './EditComponent';

class AllTask extends Component {
  render() {
    return (
    <div>
      <h1>All Task</h1>
      {this.props.tasks.map((task)=>(
        <div key={task.id}>
          {task.editing?<EditComponent task={task} key={task.id}/>:<Task key={task.id} task={task}/>}
        </div>
      ))}
    </div>
    );
   }
}
const mapStateToProps = (state)=>{
  return{
    tasks:state
  }
}

export default connect(mapStateToProps)(AllTask);