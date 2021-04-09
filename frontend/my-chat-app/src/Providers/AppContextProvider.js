import React, {useEffect, useState} from 'react';
import AppContext from './AppContext'
import Axios from 'axios';


const AppContextProvider = ({children})=>{

const [listUser, setListUser] = useState([])

//Récupération de tous les utilisateurs, Va renvoyer une erreur car Il manque le Token
useEffect(()=>{
    Axios.get('http://localhost:8000/users').then((response)=>{

    console.log(response)
    })
}, []);

    return(
        <AppContext.Provider value= {{
            listUser,
            setListUser
        }} >
            {children}
        </AppContext.Provider>
    )
}
 export default AppContextProvider


