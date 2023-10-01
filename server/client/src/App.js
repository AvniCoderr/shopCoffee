import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import Favourite from './components/Favourite';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/UseReducer';
import Footor from './components/Footor';

export const userContext = createContext();
const Routing = () => {
  return(
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/fav" element={<Favourite/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
  )

}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routing/>
    <Footor/>
    </userContext.Provider>
      </>
  );
}

export default App;
