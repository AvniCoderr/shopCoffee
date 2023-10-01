import React,{ useEffect,useState } from 'react';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import './css/all.css'
  // "proxy": "https://shopping-a16v.onrender.com/",

    


const Home = () =>{
    const [lis,setLis] = useState([]);
    const call = async () => {
        try {
            const res = await fetch('/api/web_data',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                }
            });
            const data = await res.json();
            setLis(data); 
            if(!res.status===400){
                throw new Error(res.error);
            }
        } catch (error) {
                console.log(error);
        }
    }

    useEffect(() => {
      call();
    },[])
    return(
       <>
        {
       lis.map((l)=>{return(<div className="banner_section layout_padding" style={{"backgroundImage":"url("+l.imgMain+")"}}>
         <div className="container">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="banner_taital">
                              <h1 className="outstanding_text">{l.body.title}</h1>
                              <h1 className="coffee_text">Coffee Shop</h1>
                              <p className="there_text">{l.body.description} </p>
                              <div className="learnmore_bt"><a href="#">Learn More</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
               </div>
            </div>
          </div>)})}
          <AboutUs/>
          <Gallery/>
       </> 
    );
}
 export default Home;