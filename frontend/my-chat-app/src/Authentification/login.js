import React from 'react';
import {Link} from 'react-router-dom'

const Login = ()=>{

    return(
        
        <div>
            <h1>Page de connexion</h1>
            <form >
                <div>
                    <label>
                        Username
                        <input type='text'>
                        </input>
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input type='password'>
                        </input>
                    </label>
                </div>

                <Link to='/users'>
                    <div>
                        Create an account
                    </div>
                </Link>

                <button type="submit">
                    login
                </button>
            </form>
        </div>
    )
}
export default Login;