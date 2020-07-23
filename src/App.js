
import React, { Component } from 'react';
import TaskForm from './TaskFrom';
import AllTask from './AllTask';


class App extends Component {
  render() {
    return (
    <div className="App">
        <TaskForm />
        <AllTask />
    </div>
    );
    }
  }
export default App;