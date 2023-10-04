import React, { Component } from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

class App extends Component {
  render() {
    return (
      

        <Router>
          <Header/>
          <Routes>
          
          <Route path="/" exact element={<TodoApp/>}/>
          <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
      
    );
  }
}

export default App;
