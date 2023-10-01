import React,{useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

    const Register = () => {
        const history = useNavigate();
        const [user, SetUser] = useState({
            username:"",name:"",email:"",password:"",confirmPassword:""
        })

        let name,value;
        const handleInputs = (e) => {
            name = e.target.name;
            value = e.target.value;
            SetUser({...user, [name]:value})
        }
        const PostData = async (e) => {
            e.preventDefault();
            const {username,name,email,password,confirmPassword} = user;

            const res = await fetch("/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username,name,email,password,confirmPassword})
            });
            const data = await res.json();
            if(res.status===422 || !data){
                window.alert("Invalid Registration");
            }else{
                window.alert("Successfully signed up");
                history("/signin");
            }
        }
    return(
        <>
        <section>
            <div className='container active'>
                <div className='user signupBx'>
                    <div className='formBx'>
                    <form action="/register" method="POST" autoComplete="off">
                        <h2>
                        Create an account
                        </h2>
                        <input name='username' type='text' placeholder='Username' value={user.username} onChange={handleInputs}></input>
                        <input name='name' type='text' placeholder='Name' value={user.name} onChange={handleInputs}></input>
                        <input name='email' type='email' placeholder='someone@example.com' value={user.email} onChange={handleInputs}></input>
                        <input name='password' type='password' placeholder='Create Password' value={user.password} onChange={handleInputs}></input>
                        <input name='confirmPassword' type='password' placeholder='Confirm Password' value={user.confirmPassword} onChange={handleInputs}></input>
                        <input type='submit' value='Sign Up' onClick={PostData}></input>
                        <p className='signup'>Already have an account? <NavLink to='/signin'>Login</NavLink></p>
                    </form>
                    </div>
                    <div className='imgBx'>
                        <div className='sideimg'></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Register;