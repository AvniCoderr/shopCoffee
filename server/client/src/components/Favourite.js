import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
    const Nav = useNavigate();
    const [user,userData] = useState([]);
    const callFav = async () => {
        try {
            const res = await fetch('/fav',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            userData(data);
            if(!res.status===400){
                throw new Error(res.error);
            }
        } catch (error) {
                Nav("/signin")
                console.log(error);
        }
    }

    useEffect(() => {
        callFav();
    },[])

    return(
        <>{user.name}</>
    )
}

export default Favourite;