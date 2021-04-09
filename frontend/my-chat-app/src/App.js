import React from 'react';
import Login from './Authentification/login'
import Create from './CRUD/create'
import Dashboard from './interfaces/dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'


const App = ()=>{
  return (
    <div className="App">

      <Router>
        <Route path='/' exact component={Dashboard} />
        <Route path='/login' exact component={Login} />
        <Route path='/users' exact component={Create} />
      </Router>


    </div>
  );
}

export default App;
