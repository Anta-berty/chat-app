import React, {useState} from 'react';
import Axios from 'axios'


const Create = ()=>{

    //Création des champs de saisie spécifiques à la création d'User
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //Fonction for submit the creation

    const addUser = () =>{

       Axios.post("http://localhost:8000/users", {
           username : username,
           password : password
       })


    }
    
    return(
        <div>
            <h1>Création d'un compte</h1>
            <form >
                <div>
                    <label>
                        Username
                        <input type='text'
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }} >
                        </input>
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input type='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        >
                        </input>
                    </label>
                </div>

                
                    <button type="submit" 
                    onClick={addUser}>
                        Submit
                    </button>
                
                </form> 
        </div>
    )

}

export default Create;