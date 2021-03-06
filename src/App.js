import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import ExercisesList from "./containers/ExerciseList/ExerciseList";
import EditExercise from "./containers/EditExercise/EditExercise";
import CreateExercise from "./containers/CreateExercise/CreateExercise";
import CreateUser from "./containers/CreateUser/CreateUser";

function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} /> 
      </div>
    </Router>
  );
}

export default App;
