import React, { useEffect, useState } from 'react';

const AboutUs = () => {
    const [liss,setLiss] = useState([]);
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
            setLiss(data); 
            if(!res.status===400){
                throw new Error(res.error);
            }
        } catch (error) {
                console.log(error);
        }
    }

    useEffect(()=>{
        call();
    },[])
    return(
        <>
        {liss.map((lb) => {return(<div className="about_section layout_padding" >
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_taital_main">
                     <div className="about_taital">About Us</div>
                     <p className="about_text">Full cleaning and housekeeping services for companies and households.</p>
                     <p className="about_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img"><img src={lb.imgAbout}/></div>
               </div>
            </div>
         </div>
      </div>)})}
      </>
    )
}

export default AboutUs;