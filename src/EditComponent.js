import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component{
    handleEdit = (e)=>{
        e.preventDefault();
        const newTask = this.getTask.value;
        const data={
            newTask
        }
        this.props.dispatch({type:'UPDATE', id: this.props.task.id, data:data})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleEdit}>
                   <input required type="text" ref={(input) => this.getTask = input}
                    defaultValue={this.props.task.task} placeholder="Enter Task" />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);