import React,{useContext, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {userContext} from '../App';

const Login = () => {
    const {state,dispatch} = useContext(userContext);
    const history = useNavigate();
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    const GetData = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,password})
        });
        const data = await res.json();
        if(res.status===400 || !data){
            window.alert("Invalid Credentials");
        }else if(res.status===201){
            dispatch({type:"USER",payload:true});
            window.alert("Logged in Successfully");
            window.localStorage.setItem('MY_APP_STATE', JSON.stringify(true));
            history("/");
            window.location.reload()
        }else{
          window.alert("Invalid");
        }
    }

    return(
        <>
    <section>
        <div className='container'>
          <div className='user signinBx'>
            <div className='imgBx'>
              <div className='sideimg'>
                  LogIn to continue
              </div>
            </div>
            <div className='formBx'>
              <form action="/signin" method="POST" autoComplete="off">
                <h2>
                  Sign In
                </h2>
                <input name='username' type='text' value={username} onChange={(e) => SetUsername(e.target.value)} placeholder='Username'></input>
                <input name='password' type='password' value={password} onChange={(e) => SetPassword(e.target.value)} placeholder='Password'></input>
                <input type='submit' value='Login' onClick={GetData}></input>
                <p className='signup'>Dont't have an account? <NavLink to='/register'>Sign UP</NavLink></p>
              </form>
            </div>
          </div>
          </div>
        </section>
        </>
    );
}
export const dataa = window.localStorage.getItem('MY_APP_STATE');
export default Login;