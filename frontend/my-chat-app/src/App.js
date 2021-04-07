import React from 'react';
import Login from './Authentification/login'
import Create from './CRUD/create'
import {BrowserRouter as Router, Route} from 'react-router-dom'


const App = ()=>{
  return (
    <div className="App">

      <Router>
        
        <Route path='/' exact component={Login} />
        <Route path='/users' exact component={Create} />

      </Router>


    </div>
  );
}

export default App;
