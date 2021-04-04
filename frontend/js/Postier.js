import axios from 'axios'
import 'regenerator-runtime/runtime'

class Postier{

    login(user,password){
        axios.post('auth/new',{key:request}).then(res=>{
            setToken(res.data.accessToken)
        })

    }


}

export const postier = new Postier()