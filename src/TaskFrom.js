import React, { Component } from 'react';
import {connect} from 'react-redux';

class TaskForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const task = this.getTask.value;
        const data = {
          id: new Date(),
          task,
          editing:false
        }
        this.props.dispatch({
            type:'ADD_TASK',
            data});
          this.getTask.value = '';
        
    }
render() {
return (
<div>
  <h1>Create task</h1>
  <form onSubmit={this.handleSubmit}>
  <input required type="text" ref={(input)=>this.getTask = input} 
    placeholder="Enter Task"/>
   <button>Add Task</button>
  </form>
</div>
);
}
}
export default connect()(TaskForm);