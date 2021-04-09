import React from 'react';
import {Link} from 'react-router-dom'

const Dashboard = ()=>{

    return(
        <div>
            <h1>Welcome to my chat App</h1>
            <Link to='/login'><button>Sign up</button></Link>
            <Link to='/users'><button>Create a new account</button></Link>
        </div>
    )
}

export default Dashboard;