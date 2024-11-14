import React from "react";
import Logo from "../images/SkillsIcons/logo.svg";

const Landing = () => {
    return(
        <div id="home" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%", fontFamily: 'Julius Sans One', backgroundColor: "transparent", position: "relative" }}>
            <h1 className="text-5xl sm:text-7xl" style={{ backgroundColor: "transparent", fontWeight: "normal" }}>Allison Livingston</h1>
            <h3 className="text-xl sm:text-2xl pt-4 tracking-wider sm:tracking-widest" style={{ backgroundColor: "transparent", fontFamily: "Archivo Narrow", fontWeight: "normal" }}>Front End Developer</h3>
        </div>
        // <div id="home"></div>
            
        // <div className="container">
        //     <div className="plant-1">
        //         <div className="succulent-1"></div>
        //     </div>
        //     <div className="plant-2"><div className="succulent-2"></div></div>
        //     <div className="plant-3">
        //         <div className="succulent-3"></div>
        //         <div className="succulent-4"></div>
        //     </div>
        // </div>
    )
}

export default Landing;