import axios from "axios"
import { api } from "./api"
export const loginCore= async  (data) =>{
    await axios.post(`${api}/login`,data)
    .then((res)=>{
       if(res.status==200) {
            localStorage.setItem("token",res.data.token)
       }
      
    })
    .catch((err)=>{
        console.log(err.response.statusText)
        console.log(err.message)
    })
}