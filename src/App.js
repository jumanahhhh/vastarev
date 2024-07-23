import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Pg6 from './components/pag6/Pg6';
import Pg1 from './components/page1/Pg1';
import Pg2 from './components/page2/Pg2';
import Pg3 from './components/page3/Pg3';
import Pg4 from './components/page4/Pg4';
import Pg5 from './components/page5/Pg5';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Pg1 />
      <Pg2 />
      <Pg3 />
      <Pg4 />
      <Pg5 />
      <Pg6 />
      <Pg5 />
    </div>
  );
}

export default App;




// import { useEffect, useRef } from 'react';
// import './App.css';
// import Navbar from './components/navbar/Navbar';
// import Pg6 from './components/pag6/Pg6';
// import Pg1 from './components/page1/Pg1';
// import Pg2 from './components/page2/Pg2';
// import Pg3 from './components/page3/Pg3';
// import Pg4 from './components/page4/Pg4';
// import Pg5 from './components/page5/Pg5';

// function App() {
//   const locoScrollRef = useRef(null);
// // LOCOMOTIVE FUNCTION USED TO SMOOTHEN THE SCROLL EFFECT, check gpt ones to understand
//   useEffect(() => {
//     const gsap = window.gsap;
//     const ScrollTrigger = window.ScrollTrigger;
//     const LocomotiveScroll = window.LocomotiveScroll;

//     if (!gsap || !ScrollTrigger || !LocomotiveScroll) {
//       console.error('Required libraries not found.');
//       return;
//     }

//     gsap.registerPlugin(ScrollTrigger);

//     locoScrollRef.current = new LocomotiveScroll({
//       el: document.querySelector("#root"),
//       smooth: true,

//       // for tablet smooth
//       tablet: { smooth: true },

//       // for mobile
//       smartphone: { smooth: true }
//     });

//     const locoScroll = locoScrollRef.current;

//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#root", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight
//         };
//       }
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();

//     return () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.destroy();
//         locoScrollRef.current = null;
//       }
//     };
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <div className="App" id="root"> {/* Ensure this ID is correctly assigned */}
//       <Navbar/>
//       <Pg1/>
//       <Pg2/>
//       <Pg3/>
//       <Pg4/>
//       <Pg5/>
//       <Pg6/>
//       <Pg5/>
//     </div>
//   );
// }

// export default App;



