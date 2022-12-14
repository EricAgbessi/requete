import axios from "axios"
import { api } from "./api"
import Router from "next/router"
export const loginCore= async  (data) =>{
    const navigate=
    await axios.post(`${api}/login`,data)
    .then((res)=>{
       if(res.status==200) {
            localStorage.setItem("token",res.data.token)
            Router.push('/Home/Home')
       }
      
    })
    .catch((err)=>{
        console.log(err.response.statusText)
        console.log(err.message)
    })
}