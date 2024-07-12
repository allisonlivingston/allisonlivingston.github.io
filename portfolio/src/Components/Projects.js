import React from "react";
import LibraryImg from "../images/ProjectScreenshots/My-Library.png";
import PixelArt from "../images/ProjectScreenshots/Pixel-Art.png";
import BikeImg from "../images/ProjectScreenshots/Bike-Share-App.png";

const Projects = () => {
    return(
        <div id="projects" style={{ width: "100%" }}>
            <h1>
                Projects
            </h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ display: "flex", width: "100%", marginTop: 50 }}>
                    <a href="https://my-library-tracker.firebaseapp.com/" target="_blank" style={{ width: "40%", margin: 50, marginTop: 0 }}>
                        <img src={LibraryImg} width={"100%"} />
                    </a>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>My Library</h3>
                        <p className="tech-used">ReactJS, HTML, CSS, Firebase, Cypress, Express, Knex, PostgreSQL, Heroku</p>
                        <a href="https://my-library-tracker.firebaseapp.com/" target="_blank">Live App</a>
                        <a href="https://github.com/allisonlivingston/MyLibrary" target="_blank">View Code</a>
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%", marginTop: 50 }}>
                    <a href="https://react-pixel-art-99aaf.firebaseapp.com/" target="_blank" style={{ width: "40%", margin: 50, marginTop: 0 }}>
                        <img src={PixelArt} width={"100%"} />
                    </a>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>Pixel Art</h3>
                        <p className="tech-used">ReactJS, HTML, CSS, Firebase</p>
                        <a href="https://react-pixel-art-99aaf.firebaseapp.com/" target="_blank">Live App</a>
                        <a href="https://github.com/allisonlivingston/React-Pixel-Art/" target="_blank">View Code</a>
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", marginTop: 50 }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>Bike Share</h3>
                        <p className="tech-used">JavaScript, HTML, CSS, Cypress, Firebase</p>
                        <a href="https://project-2-bike-share.firebaseapp.com/" target="_blank">Live App</a>
                        <a href="https://github.com/allisonlivingston/Bike-Share-App" target="_blank">View Code</a>
                    </div>
                    <a href="https://project-2-bike-share.firebaseapp.com/" target="_blank" style={{ width: "40%", margin: 50, marginTop: 0 }}>
                        <img src={BikeImg} width={"100%"} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;