import React, { Component } from 'react';
import {connect} from 'react-redux';

class Task extends Component{
    render(){
        return(
            <div>
                <h4 style={{color:'blue'}} onClick={}>{this.props.task.task}</h4>
                <button
                onClick={()=>this.props.dispatch({type:'EDIT_TASK', id:this.props.task.id})}>
                Edit</button>
                <button
                onClick={()=>this.props.dispatch({type:'DELETE_TASK',id:this.props.task.id})}
                >Delete</button>
            </div>
        );
    }
}

export default connect()(Task);