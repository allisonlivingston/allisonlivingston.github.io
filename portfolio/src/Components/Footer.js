import React from "react";
import LinkedinIcon from "../images/ContactIcons/linkedin.svg";
import GithubIcon from "../images/ContactIcons/github.svg";

const Footer = () => {
    return(
        <div style={{ paddingBottom: 50 }}>
            <div>
                <a href="https://www.linkedin.com/in/allisonlivingston16/" target="_blank">
                    <img width={50} src={LinkedinIcon} />
                </a>
                <a href="https://github.com/allisonlivingston" target="_blank">
                    <img width={50} src={GithubIcon} />
                </a>
            </div>
            <h4 style={{ fontWeight: 500, letterSpacing: 0.5 }}>&copy;2024 Allison Livingston</h4>
        </div>
    )
}

export default Footer;