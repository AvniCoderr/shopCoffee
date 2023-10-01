import React, { useEffect, useState } from "react";

const Gallery = () => {
    const [gall,setGall] = useState([]);
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
            setGall(data); 
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
        {gall.map((la)=>(<div className="gallery_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="gallery_taital">Our Gallery</h1>
                  {/* <p className="gallery_text">Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p> */}
               </div>
            </div>
            <div className="">
               <div className="gallery_section_2">
               <div className="row">
               {la.img.map((abc)=>(<div className="col-md-4">
                        <div className="container_main">
                           <img src={abc.img} alt="Avatar" className="image"/>
                           <div className="overlay">
                              <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                           </div>
                        </div><br></br>
                     </div>))} 
                  </div>
               </div>
            </div>
            <div className="seemore_bt"><a href="#">See More</a></div>
         </div>
      </div>))}
        </>
    )

}

export default Gallery;