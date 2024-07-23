import React, { useEffect } from 'react';
import "./Pg2.css";
import pic from "../assets/pic.png";

const Pg2 = () => {
    useEffect(() => {
        const rightElems = document.querySelectorAll(".right-elem");

        rightElems.forEach((elem) => {
            const img = elem.querySelector("img");
            // const re = elem.querySelector(".right-elem")

            elem.addEventListener("mouseenter", () => {
                window.gsap.to(img, {
                    opacity: 1,
                    scale: 1,
                });
                window.gsap.to(elem, {
                    borderTopWidth: "3px",
                    borderTopColor: "#fff",

                });
            });

            elem.addEventListener("mouseleave", () => {
                window.gsap.to(img, {
                    opacity: 0,
                    scale: 0
                });
                window.gsap.to(elem, {
                    borderTopWidth: "1px",
                    borderTopColor: "#333",
 
                });
            });
            elem.addEventListener("mousemove", (dets) => {
                window.gsap.to(img, {
                    x:dets.x - elem.getBoundingClientRect().x - 35,
                    y:dets.y - elem.getBoundingClientRect().y - 115
                });
            });
        });
    }, []);

    return (
        <div className='page2'>
            <div id="left-div">
                <p>Lorem ipsum is an iPhone, Apple is a high quality brand which .</p>
                <h5>Culpa irure ex magna dolore deserunt sunt non enim laborum. In eu dolor fugiat aliquip elit do occaecat exercitation reprehenderit do proident adipisicing anim eu. Nostrud ipsum dolore veniam commodo excepteur aliquip. Ut veniam adipisicing nulla ut fugiat id labore velit labore.</h5>
            </div>

            <div id="right-div">
                <div className='right-elem'>
                    <h4>The Gestalt Principles of Design: How Design Forms Visual Perception</h4>
                    <img src={pic} />
                </div>
                <div className='right-elem'>
                    <h4>The Gestalt Principles of Design: How Design Forms Visual Perception</h4>
                    <img src={pic} />
                </div>
                <div className='right-elem'>
                    <h4>The Gestalt Principles of Design: How Design Forms Visual Perception</h4>
                    <img src={pic} />
                </div>
                <div className='right-elem'>
                    <h4>The Gestalt Principles of Design: How Design Forms Visual Perception</h4>
                    <img src={pic} />
                </div>
            </div>
        </div>
    );
}

export default Pg2;
