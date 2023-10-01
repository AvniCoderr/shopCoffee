import React, { useEffect,useContext} from "react";
import {userContext} from '../App';
import { useNavigate } from "react-router-dom";

const Logout= () => {
    const {state,dispatch} = useContext(userContext);
    const Nav = useNavigate();
    const callFav = async () => {
        try {
            const res = await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            console.log(res.cookie)
            dispatch({type:"USER",payload:false});
            window.localStorage.removeItem('MY_APP_STATE');
            Nav('/signin')
            window.location.reload();
            if(!res.status===200){
                throw new Error(res.error);
            }
        } catch (error) {
                console.log(error);
        }
    }

    useEffect(() => {
        callFav();
    },[])
    return(
       <>LogOut</>
    )
}

export default Logout;