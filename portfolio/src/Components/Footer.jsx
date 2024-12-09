import React from "react";
import LinkedinIcon from "../images/ContactIcons/linkedin.svg";
import GithubIcon from "../images/ContactIcons/github.svg";

const Footer = () => {
    return(
        <div className="mb-6 w-full">
            <div className="my-3 w-full flex justify-center">
                <a href="https://www.linkedin.com/in/allisonlivingston16/" target="_blank" rel="noreferrer">
                    <img width={50} src={LinkedinIcon} style={{ marginRight: "10px" }} />
                </a>
                <a href="https://github.com/allisonlivingston" target="_blank" rel="noreferrer">
                    <img width={50} src={GithubIcon} />
                </a>
            </div>
            <h4 className="font-medium tracking-widest text-base font-extrabold" style={{ fontFamily: "Archivo Narrow" }}>&copy;2024 Allison Livingston</h4>
        </div>
    )
}

export default Footer;