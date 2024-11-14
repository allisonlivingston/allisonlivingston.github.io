import React, { useState } from "react";
import LibraryImg from "../images/ProjectScreenshots/My-Library.png";
import PixelArt from "../images/ProjectScreenshots/Pixel-Art.png";
import BikeImg from "../images/ProjectScreenshots/Bike-Share-App.png";

const Projects = ({ handleSelectedProject }) => {
    const projectData = [
        {
            name: "Pixel Art",
            img: PixelArt,
            alt: "pixel art project",
            tech: ["ReactJS", "HTML", "CSS", "Firebase"],
            href: "https://react-pixel-art-99aaf.firebaseapp.com/",
            github: "https://github.com/allisonlivingston/React-Pixel-Art/"
        },
        {
            name: "My Library",
            img: LibraryImg,
            alt: "library project",
            tech: ["ReactJS", "HTML", "CSS", "Firebase", "Cypress", "Express", "Knex", "PostgreSQL", "Heroku"],
            href: "https://my-library-tracker.firebaseapp.com/",
            github: "https://github.com/allisonlivingston/MyLibrary"
        },
        {
            name: "Bike Share",
            img: BikeImg,
            alt: "bike share project",
            tech: ["JavaScript", "HTML", "CSS", "Cypress", "Firebase"],
            href: "https://project-2-bike-share.firebaseapp.com/",
            github: "https://github.com/allisonlivingston/Bike-Share-App"
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    return(
        <div id="projects" style={{ display: "flex", flexDirection: "column", width:"100%", position: "relative", backgroundColor: "transparent", alignItems: "center" }}>
            <h1 className="text-4xl sm:text-5xl mb-6 sm:mb-8" style={{ marginTop: "150px", fontFamily: 'Julius Sans One' }}>
                Projects
            </h1>
            <div className="w-10/12 flex flex-col sm:flex-row items-center justify-center flex-wrap">
                { projectData.map((item, i) => {
                    return (
                        <div key={i} className="w-44 md:w-52 h-44 md:h-52 flex flex-col items-center m-2 hover:shadow-[1px_1px_20px_3px_#6A6A6A] cursor-pointer" onMouseOver={() => setSelectedIndex(i)} onMouseOut={() => setSelectedIndex(null)} onClick={() => handleSelectedProject(projectData[i])}>
                            <div className="w-full h-full flex items-center justify-center bg-white border-solid border-black border-2 rounded">
                                <h3 className="text-xl sm:text-2xl" style={{ display: selectedIndex !== i ? "block" : "none", fontFamily: "Archivo Narrow" }}>{item.name}</h3>
                                <img className="project-cards-img" src={item.img} alt={item.alt} style={{ display: selectedIndex === i ? "block" : "none" }} />
                            </div>
                            <p className="tech-used">{item.tech}</p>
                        </div> 
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;