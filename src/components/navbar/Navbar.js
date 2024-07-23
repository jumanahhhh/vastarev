import React, { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navElems = document.querySelectorAll(".nav-elem h4");

    const handleMouseEnter = () => {
      var tl = window.gsap.timeline();
      tl.to("#nav-bottom", {
        height: "21vh"
      });
      tl.to(".nav-part2 h5", {
        display: "block",
      });
      tl.to(".nav-part2 h5 span", {
        y: 0,
        duration: 0.15,
        stagger: {
          amount: 0.2,
        },
      });
    };

    const handleMouseLeave = () => {
      var tl = window.gsap.timeline();
      tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
          amount: 0.2,
        },
      });
      tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1,
      });
      tl.to("#nav-bottom", {
        height: 0,
        // duration: 0.15,
      });
    };

    navElems.forEach((elem) => {
      elem.addEventListener("mouseenter", handleMouseEnter);
      elem.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navElems.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <nav>
      <h1>VASTAREV.</h1>
      <div className="nav-part2">
        <div className="nav-elem">
          <h4>Case Studies</h4>
          <h5><span>Case Studies</span></h5>
        </div>
        <div className="nav-elem">
          <h4>Area Of Expertise</h4>
          <h5><span>Case Studies</span></h5>
          <h5><span>asjfa</span></h5>
          <h5><span>akfsjahfuauhf</span></h5>
          <h5><span>ajhfjhfaugfa</span></h5>
        </div>
        <div className="nav-elem">
          <h4>UI UX Design</h4>
          <h5><span>Case Studies</span></h5>
          <h5><span>Case Studies</span></h5>
          <h5><span>akfsjahfuauhf</span></h5>
          <h5><span>ajhfjhfaugfa</span></h5>
        </div>
        <div className="nav-elem">
          <h4>Case Studies</h4>
          <h5><span>Case Studies</span></h5>
          <h5><span>asjfa</span></h5>
          <h5><span>akfsjahfuauhf</span></h5>
          <h5><span>ajhfjhfaugfa</span></h5>
        </div>
        <div className="nav-elem">
          <h4>Case Studies</h4>
          <h5><span>Case Studies</span></h5>
          <h5><span>asjfa</span></h5>
        </div>
      </div>
      <button>
        <svg fill="none" viewBox="0 0 20 20">
          <path
            fill="#fff"
            d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
          ></path>
        </svg>
        Let's Talk
      </button>

      <div id="nav-bottom"></div>
    </nav>
  );
};

export default Navbar;






// OLD- When hovered over navbar 
// import React, {useEffect} from "react";
// import "./Navbar.css";
// const Navbar = () => {
//   useEffect(() => {
//     const nav = document.querySelector("nav");
    
//     const handleMouseEnter = () => {
//       var tl = window.gsap.timeline();
//       tl.to("#nav-bottom", {
//         height: "21vh",
//       });
//       tl.to(".nav-part2 h5", {
//         display: "block",
//       });
//       tl.to(".nav-part2 h5 span", {
//         y: 0,
//         duration:0.15,
//         stagger: {
//           amount: 0.6
//         }
//       });
//     };

//     const handleMouseLeave = () => {
//       var tl = window.gsap.timeline();
//       tl.to(".nav-part2 h5 span", {
//         y: 25,
//         stagger: {
//           amount: 0.2
//         }
//       });
//       tl.to(".nav-part2 h5",{
//         display:"none",
//         duration:0.1
//       });
//       tl.to("#nav-bottom",{
//         height:0,
//         duration:0.15
//       })
//     };
    
//     if (nav) {
//       nav.addEventListener("mouseenter", handleMouseEnter);
//       nav.addEventListener("mouseleave", handleMouseLeave);
//     }

//     return () => {
//       if (nav) {
//         nav.removeEventListener("mouseenter", handleMouseEnter);
//         nav.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);
  
  
//   return (

//     <nav>
//       <h1>VASTAREV.</h1>
//       <div className="nav-part2">
//         <div className="nav-elem">
//         <h4>Case Studies</h4>
//         <h5><span>Case Studies</span></h5>
//         </div>
//         <div className="nav-elem">
//           <h4>Area Of Expertise</h4>
//           <h5><span>Case Studies</span></h5>
//           <h5><span>asjfa</span></h5>
//           <h5><span>akfsjahfuauhf</span></h5>
//           <h5><span>ajhfjhfaugfa</span></h5>
//         </div>
//         <div className="nav-elem">
//           <h4>UI UX Design</h4>
//           <h5><span>Case Studies</span></h5>
//           <h5><span>Case Studies</span></h5>
//           <h5><span>akfsjahfuauhf</span></h5>
//           <h5><span>ajhfjhfaugfa</span></h5>
//         </div>
//         <div className="nav-elem">
//         <h4>Case Studies</h4>
//         <h5><span>Case Studies</span></h5>
//           <h5><span>asjfa</span></h5>
//           <h5><span>akfsjahfuauhf</span></h5>
//           <h5><span>ajhfjhfaugfa</span></h5>
//         </div>
//         <div className="nav-elem">
//         <h4>Case Studies</h4>
//         <h5><span>Case Studies</span></h5>
//           <h5><span>asjfa</span></h5>
//         </div>
//       </div>
//       <button><svg fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"></path></svg>Let's Talk</button>

//       <div id="nav-bottom">

//       </div>
//     </nav>
//   );
// };

// export default Navbar;