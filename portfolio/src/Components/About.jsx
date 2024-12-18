import React from "react";
import ReactIcon from "../images/SkillsIcons/reacticon.svg";
import JavaScriptIcon from "../images/SkillsIcons/jsicon.svg";
import HtmlIcon from "../images/SkillsIcons/htmlicon.svg";
import CssIcon from "../images/SkillsIcons/cssicon.svg";
import NodeIcon from "../images/SkillsIcons/nodeicon.svg";
import JsonIcon from "../images/SkillsIcons/jsonicon.svg";

const About = ({ setIsModalVisible }) => {
    const skills = ["JavaScript", "React", "HTML", "CSS"];
    const aboutInfo = "Strategic, analytical, and innovative Front End Web Developer who brings excellent technical skills in software development with expert use of technology to drive an increase in traffic and consumer engagement. Strengths in delivering upon project deliverables and achieving client satisfaction by creating visually appealing and user-friendly websites that exceed expectations. Recognized for demonstrating a natural aptitude in navigating technology initiatives and for optimizing features that boost system performance.";

    return(
        <div id="about" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", backgroundColor: "transparent" }}>
            <h1 className="text-4xl sm:text-5xl mb-6 sm:mb-8 font-normal" style={{ marginTop: "150px", fontFamily: 'Julius Sans One', textShadow: "1px 1px black" }}>
                About
            </h1>
            <div className="flex w-full flex-col md:flex-row justify-start">
                <section className="w-full md:w-1/2 flex flex-col justify-center items-center">
                    <p className="w-4/5">{aboutInfo}</p>
                </section>
                <section className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
                    <h2 className="font-bold tracking-widest text-lg m-0" style={{ fontFamily: "Archivo Narrow" }}>SKILLS + TOOLS</h2>
                    <div className="flex flex-col mt-4 mb-4">
                        <div style={{ display: "flex", width: "auto" }}>
                            <img className="skillIcon m-1" src={ReactIcon} />
                            <img className="skillIcon m-1" src={JavaScriptIcon} />
                            <img className="skillIcon m-1" src={HtmlIcon} />
                        </div>
                        <div style={{ display: "flex", width: "auto" }}>
                            <img className="skillIcon m-1" src={CssIcon} />
                            <img className="skillIcon m-1" src={JsonIcon} />
                            <img className="skillIcon m-1" src={NodeIcon} />
                        </div>
                    </div>
                    <button className="text-base tracking-widest m-0 bg-white hover:bg-purple-400 p-4 leading-4 font-bold cursor-pointer border-solid border-black border-2 rounded" style={{  fontFamily: "Archivo Narrow" }} onClick={() => setIsModalVisible(true)}>VIEW ALL</button>
                </section>
            </div>
        </div>
    )
}

export default About;