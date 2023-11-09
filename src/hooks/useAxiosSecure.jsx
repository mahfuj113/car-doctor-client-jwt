import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL:  'http://localhost:5000',
    withCredentials: true
})
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
        err => {
          console.log("error tracked in the interceptor",err.response);   
          if(err.response.status === 401 || err.response.status === 403){
            console.log("logout the user");
            logOut()
            .then(() =>{
                navigate('/login')
            })
            .catch( error => console.log(error))
          }
        }
        )
    },[])
    return axiosSecure;
};

export default useAxiosSecure;