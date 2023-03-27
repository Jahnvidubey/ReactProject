import React from 'react'
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpeg";



export default function Card() {
  return (
    <div className="body">
         <div className="container">
    <input type="radio" name="dot" id="one"/>
    <input type="radio" name="dot" id="two"/>
    <div className="main-card">
      <div className="cards">
        <div className="card">
         <div className="content">
           <div className="img">
           <img src={img1} />
           </div>
           <div className="details">
             <div className="name">Andrew Neil</div>
             <div className="job">Web Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="card">
         <div className="content">
           <div className="img">
           <img src={img2} />
           </div>
           <div className="details">
             <div className="name">Jasmine Carter</div>
             <div className="job">UI Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="card">
         <div className="content">
           <div className="img">
           <img src={img3} />
           </div>
           <div className="details">
             <div className="name">Justin Chung</div>
             <div className="job">Web Devloper</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
         <div className="content">
           <div className="img">
           <img src={img4} />
           </div>
           <div className="details">
             <div className="name">Appolo Reef</div>
             <div className="job">Web Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="card">
         <div className="content">
           <div className="img">
           <img src={img5} />
           </div>
           <div className="details">
             <div className="name">Adrina Calvo</div>
             <div className="job">UI Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="card">
         <div className="content">
           <div className="img">
           <img src={img6} />
           </div>
           <div className="details">
             <div className="name">Nicole Lewis</div>
             <div className="job">Web Devloper</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
    </div>
    <div className="button">
      <label for="one" className=" active one"></label>
      <label for="two" className="two"></label>
    </div>
  </div>
    </div>
  )
}

