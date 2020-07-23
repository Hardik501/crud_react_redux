import React from 'react';
import TaskForm from './TaskFrom';
import AllTask from './AllTask';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
    return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TaskForm />
        <AllTask />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    );
  }

  function About() {
    return <h2>About</h2>;
  }

export default App;