import React,{useContext,useEffect} from 'react';
import {userContext} from '../App';
import {NavLink} from 'react-router-dom';
import { dataa } from './Login';

const Navbar = () => {
    const {state,dispatch} = useContext(userContext);
    const RenderMenu = () => {if(dataa){
            return(
                <>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                            <i className="fa-solid fa-user"></i>
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/fav">Favourite</a></li>
                            <li><a className="dropdown-item" href="/setting">Settings</a></li>
                            <li><a className="dropdown-item" href="/logout">Logout</a></li>
                        </ul>
                    </li>
                </>
            )
        }else{
            return(
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/signin">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
                </li>
            </>
            )
        }
    }
    return (
        <>
       <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Coffee Shop</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <RenderMenu/>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
     </div>
     </>
    )
}

export default Navbar;