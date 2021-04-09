import React, {useState} from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { CardHeader, Card, Grid ,Button,TextField, CardContent} from '@material-ui/core';


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
            {/* <h1>Création d'un compte</h1>
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
                
                </form>  */}

        <Grid container>
            <Grid item sm={4}></Grid>
            <Grid item container spacing={2} sm={4} direction='column' alignItems="stretch">
                <Grid item>
                    <Card>
                        <CardHeader title="Create a new account"></CardHeader>
                    </Card>
                </Grid>
           
            
                <Grid item>
                    <Card>
                        <CardContent >
                            <TextField fullWidth
                                helperText="Please enter your name"
                                id="demo-helper-text-misaligned"
                                label="Name"
                                variant="standard"
                                value={username} onChange={e => setUsername(e.target.value)}
                            />
                            <TextField fullWidth
                                helperText="Please enter your password"
                                type = "password"
                                id="standard-adornment-password"
                                label="Password"
                                variant="standard"
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid>
                    <Grid Item>
                        <Link to="/login">
                        <Button variant="contained" type="submit" onClick={addUser}>
                     Create</Button>
                     </Link>
                    </Grid>
                </Grid>
        
            </Grid>
            <Grid item sm={4}></Grid>
        </Grid>
        </div>
    )

}

export default Create;