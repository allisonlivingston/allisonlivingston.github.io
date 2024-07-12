import React from "react";
import Logo from "../images/SkillsIcons/logo.svg";

const Landing = () => {
    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }} id="home">
            <div style={{ width: "50%" }}>
                <h1>Allison Livingston</h1>
                <h3>Front End Developer</h3>
            </div>
            <div className="container">
                <div className="plant-1">
                    <div className="succulent-1"></div>
                </div>
                <div className="plant-2"><div className="succulent-2"></div></div>
                <div className="plant-3">
                    <div className="succulent-3"></div>
                    <div className="succulent-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Landing;