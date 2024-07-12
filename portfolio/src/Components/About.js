import React from "react";
import ReactIcon from "../images/SkillsIcons/reacticon.svg";
import JavaScriptIcon from "../images/SkillsIcons/jsicon.svg";
import HtmlIcon from "../images/SkillsIcons/htmlicon.svg";
import CssIcon from "../images/SkillsIcons/cssicon.svg";
import MuiIcon from "../images/SkillsIcons/muiicon.svg";
import ReduxIcon from "../images/SkillsIcons/reduxicon.svg";
import NodeIcon from "../images/SkillsIcons/nodeicon.svg";
import NpmIcon from "../images/SkillsIcons/npmicon.svg";
import JsonIcon from "../images/SkillsIcons/jsonicon.svg";
import XdIcon from "../images/SkillsIcons/xdicon.svg";
import FigmaIcon from "../images/SkillsIcons/figmaicon.svg";
import AxiosIcon from "../images/SkillsIcons/axiosicon.svg";
import BitbucketIcon from "../images/SkillsIcons/bitbucketicon.svg";
import CypressIcon from "../images/SkillsIcons/cypressicon.svg";
import ExpressIcon from "../images/SkillsIcons/expressicon.svg";
import GitIcon from "../images/SkillsIcons/giticon.svg";
import HerokuIcon from "../images/SkillsIcons/herokuicon.svg";
import HomebrewIcon from "../images/SkillsIcons/homebrewicon.svg";
import JestIcon from "../images/SkillsIcons/jesticon.svg";
import JiraIcon from "../images/SkillsIcons/jiraicon.svg";
import JqueryIcon from "../images/SkillsIcons/jqueryicon.svg";
import PostgresqlIcon from "../images/SkillsIcons/postgresqlicon.svg";
import PostmanIcon from "../images/SkillsIcons/postmanicon.svg";
import ReactNavIcon from "../images/SkillsIcons/reactnavicon.svg";
import SassIcon from "../images/SkillsIcons/sassicon.svg";
import ReactRouterIcon from "../images/SkillsIcons/reactroutericon.svg";
import SlackIcon from "../images/SkillsIcons/slackicon.svg";
import SourcetreeIcon from "../images/SkillsIcons/sourcetreeicon.svg";
import StorybookIcon from "../images/SkillsIcons/storybookicon.svg";
import TailwindIcon from "../images/SkillsIcons/tailwindicon.svg";
import TypeScriptIcon from "../images/SkillsIcons/tsicon.svg";
import VscodeIcon from "../images/SkillsIcons/vscodeicon.svg";
import VueIcon from "../images/SkillsIcons/vueicon.svg";
import XcodeIcon from "../images/SkillsIcons/xcodeicon.svg";

const About = () => {
    const skills = ["JavaScript", "React", "HTML", "CSS"];
    const aboutInfo = "Strategic, analytical, and innovative Front End Web Developer who brings excellent technical skills in software development with expert use of technology to drive an increase in traffic and consumer engagement. Strengths in delivering upon project deliverables and achieving client satisfaction by creating visually appealing and user-friendly websites that exceed expectations. Recognized for demonstrating a natural aptitude in navigating technology initiatives and for optimizing features that boost system performance.";
    return(
        <div id="about" style={{ width: "100%" }}>
            <h1>
                About
            </h1>
            <div style={styles.contentWrapper}>
                <section style={styles.contentSection}>
                    <p style={styles.contentText}>{aboutInfo}</p>
                </section>
                <section style={{ ...styles.contentSection, margin: 50 }}>
                    <img src={ReactIcon} height={100} />
                    <img src={JavaScriptIcon} height={100} />
                    <img src={HtmlIcon} height={100} />
                    <img src={CssIcon} height={100} />
                    <img src={JsonIcon} height={100} />
                    <img src={ReduxIcon} height={100} />
                    <img src={NodeIcon} height={100} />
                    <img src={NpmIcon} height={100} />
                    <img src={MuiIcon} height={100} />
                    <img src={XdIcon} height={100} />
                    <img src={FigmaIcon} height={100} />
                    <img src={AxiosIcon} height={100} />
                    <img src={BitbucketIcon} height={100} />
                    <img src={CypressIcon} height={100} />
                    <img src={ExpressIcon} height={100} />
                    <img src={GitIcon} height={100} />
                    <img src={HerokuIcon} height={100} />
                    <img src={HomebrewIcon} height={100} />
                    <img src={JestIcon} height={100} />
                    <img src={JiraIcon} height={100} />
                    <img src={JqueryIcon} height={100} />
                    <img src={PostgresqlIcon} height={100} />
                    <img src={PostmanIcon} height={100} />
                    <img src={ReactNavIcon} height={100} />
                    <img src={SassIcon} height={100} />
                    <img src={ReactRouterIcon} height={100} />
                    <img src={SlackIcon} height={100} />
                    <img src={SourcetreeIcon} height={100} />
                    <img src={StorybookIcon} height={100} />
                    <img src={TailwindIcon} height={100} />
                    <img src={TypeScriptIcon} height={100} />
                    <img src={VscodeIcon} height={100} />
                    <img src={VueIcon} height={100} />
                    <img src={XcodeIcon} height={100} />
                </section>
            </div>
        </div>
    )
}

let styles = {
    contentWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    contentSection: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    contentText: {
        width: "80%"
    }
}

export default About;