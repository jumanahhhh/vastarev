// import React, { useEffect } from 'react'
// import "./Pg6.css";
// const Pg6 = () => {

//   useEffect(()=>{
//     window.gsap.from(".btm6-parts h4",{
//       x: 0,
//       duration:1,
//       scrollTrigger:{
//         trigger: "#btm6-part2",
//         scroller:"body",
//         // markers: true,
//         start:"top 80%",
//         end:"top 10%",
//         scrub:true
//       }
//     });
    
//   })
  
//   return (
//     <div className='page6'>
//       <h1>Digital Product Design Process</h1>
//       <div className='page6-content'>   
//         <div id='d-bttn'>
//         <h4>See all case studies.<i class="ri-arrow-right-up-line"></i></h4>
//         <h4>See all case studies.<i class="ri-arrow-right-up-line"></i></h4>
//         </div>
        
//         <div className='right'>
//         <p>A anim nulla anim enim  ut proident elit consequat minim ut labore et consequat. Fugiat quis ullamco pariatur reprehenderit officia cillum laboris quis ea laborum enim. Est eu veniam aute nisi minim veniam do Lorem ut enim deserunt.</p>
//         <p>Ad sit magna A cupidatat voluptate. Do veniam minim   magna irure laborum Lorem. Quis mollit esse ut et fugiat laborum magna amet eiusmod fugiat qui enim. Non sunt eiusmod incididunt eiusmod voluptate laboris.</p>
//         </div>
//       </div>
//       <div id="page6-bottom">
//                 <div id="btm6-part1" class="btm6-parts">

//                 </div>
//                 <div id="btm6-part2" class="btm6-parts">
//                     <h5>Product Strategy</h5>
//                     <h4><span>1</span>Strategy Workshop</h4>
//                     <h4><span>2</span>Idea Validation</h4>
//                     <h4><span>3</span>Market Research</h4>
//                     <h4><span>4</span>Product Positioning</h4>
//                     <h4><span>5</span>UX Research</h4>
//                     <h4><span>6</span>Functional Decomposition</h4>
//                 </div>
//                 <div id="btm6-part3" class="btm6-parts">
//                     <h5>UX Design</h5>
//                     <h4><span>1</span>Strategy </h4>
//                     <h4><span>2</span>Idea </h4>

//                 </div>
//                 <div id="btm6-part4" class="btm6-parts">
//                     <h5>UI Design</h5>
//                     <h4><span>1</span>Strategy</h4>
//                     <h4><span>2</span>Idea </h4>
//                     <h4><span>3</span>Market </h4>
//                 </div>
//                 <div id="btm6-part5" class="btm6-parts">
//                     <h5>Delivery</h5>
//                 </div>
//             </div>

//     </div>
//   )
// }

// export default Pg6



import React, { useEffect } from 'react';
import './Pg6.css';

const Pg6 = () => {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) {
      console.error('GSAP or ScrollTrigger not found.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".btm6-parts h4", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#btm6-part2",
        scroller: "body", // Ensure this matches the scroller used in LocomotiveScroll
        // markers: true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
      }
    });
  }, []);

  return (
    <div className='page6'>
      <h1>Digital Product Design Process</h1>
      <div className='page6-content'>
        <div id='d-bttn'>
          <h4>See all case studies.<i className="ri-arrow-right-up-line"></i></h4>
          <h4>See all case studies.<i className="ri-arrow-right-up-line"></i></h4>
        </div>

        <div className='right'>
          <p>A anim nulla anim enim ut proident elit consequat minim ut labore et consequat. Fugiat quis ullamco pariatur reprehenderit officia cillum laboris quis ea laborum enim. Est eu veniam aute nisi minim veniam do Lorem ut enim deserunt.</p>
          <p>Ad sit magna A cupidatat voluptate. Do veniam minim magna irure laborum Lorem. Quis mollit esse ut et fugiat laborum magna amet eiusmod fugiat qui enim. Non sunt eiusmod incididunt eiusmod voluptate laboris.</p>
        </div>
      </div>
      <div id="page6-bottom">
        <div id="btm6-part1" className="btm6-parts"></div>
        <div id="btm6-part2" className="btm6-parts">
          <h5>Product Strategy</h5>
          <h4><span>1</span>Strategy Workshop</h4>
          <h4><span>2</span>Idea Validation</h4>
          <h4><span>3</span>Market Research</h4>
          <h4><span>4</span>Product Positioning</h4>
          <h4><span>5</span>UX Research</h4>
          <h4><span>6</span>Functional Decomposition</h4>
        </div>
        <div id="btm6-part3" className="btm6-parts">
          <h5>UX Design</h5>
          <h4><span>1</span>Strategy </h4>
          <h4><span>2</span>Idea </h4>
        </div>
        <div id="btm6-part4" className="btm6-parts">
          <h5>UI Design</h5>
          <h4><span>1</span>Strategy</h4>
          <h4><span>2</span>Idea </h4>
          <h4><span>3</span>Market </h4>
        </div>
        <div id="btm6-part5" className="btm6-parts">
          <h5>Delivery</h5>
        </div>
      </div>
    </div>
  );
}

export default Pg6;
