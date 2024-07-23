import React, { useEffect } from 'react';
import "./Pg4.css";
import rhea from "../assets/rhea.png"
import afro from "../assets/afro.png"
const Pg4 = () => {
    useEffect(()=>{
        const section = document.querySelectorAll(".section-right")

        section.forEach(function(elem){
            const video = elem.querySelector("video")
            elem.addEventListener("mouseenter", function(){
                video.style.opacity = 1
                video.play() 
            })
            elem.addEventListener("mouseleave", function(){
                video.style.opacity = 0
                video.load() 
            })
        })
    })
  return (
    <div className='page4'>
      <div className='section'>
        <div className='section-left'>
            <h2>Accren Rhea.</h2>
            <p>Aliquip nisi velit ad aute officia elit cupidatat fugiat laboris laboris aliqua labore. Adipisicing eiusmod consectetur reprehenderit eu ut reprehenderit occaecat consequat nostrud deserunt ea ipsum nisi est. Ad veniam deserunt enim minim id esse deserunt eiusmod irure.</p>
        </div>
        <div className='section-right'>
            <img src={rhea}></img>
            <video src='https://lazarev.kiev.ua/cases/la24/accern-rhea-cover-big.mp4'></video>
        </div>
      </div>
      <div className='section'>
      <div className='section-left'>
            <h2>Afro Tech.</h2>
            <p>Aliquip nisi velit ad aute officia elit cupidatat fugiat laboris laboris aliqua labore. Adipisicing eiusmod consectetur reprehenderit eu ut reprehenderit occaecat consequat nostrud deserunt ea ipsum nisi est. Ad veniam deserunt enim minim id esse deserunt eiusmod irure.</p>
        </div>
        <div className='section-right'>
            <img src={afro}></img>
            <video src='https://lazarev.kiev.ua/cases/la24/accern-rhea-cover-big.mp4'></video>
        </div>
      </div>
    </div>
  )
}

export default Pg4
