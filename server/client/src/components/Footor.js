import React from "react";


const Footor = () => {
    return (
        <>
        <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">About</h3>
                  <p className="footer_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">Menu</h3>
                  <div className="footer_menu">
                     <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="useful_text">Useful Link</h1>
                  <p className="dummy_text">Adipiscing Elit, sed do Eiusmod Tempor incididunt </p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="useful_text">Contact Us</h1>
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#">
                           <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_10">Address : Loram Ipusm</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">Call : +01 1234567890</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">Email : demo@gmail.com</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
         </div>
      </div></>
    )
}

export default Footor;