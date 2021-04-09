import React from 'react';
import { CardHeader, Card, Grid ,Button,TextField, CardContent} from '@material-ui/core';
//import {Link} from 'react-router-dom'

const Login = ()=>{

    return(
        <>
        <Grid container>
            <Grid item sm={4}></Grid>
            <Grid item container spacing={2} sm={4} direction='column' alignItems="stretch">
                <Grid item>
                    <Card>
                        <CardHeader title="Page de connexion"></CardHeader>
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
                                //value={username} onChange={e => setUsername(e.target.value)}
                            />
                            <TextField fullWidth
                                helperText="Please enter your password"
                                type = "password"
                                id="standard-adornment-password"
                                label="Password"
                                variant="standard"
                                // value={password} 
                                // onChange={e => setPassword(e.target.value)}
                            />
                        </CardContent>
                    </Card>
                </Grid> 
                <Grid>
                    <Grid Item>
                        <Button variant="contained" type="submit" >Login</Button>
                    </Grid>
                </Grid>
        
            </Grid>
            <Grid item sm={4}></Grid>
        </Grid>
        </>
    )
}
export default Login;