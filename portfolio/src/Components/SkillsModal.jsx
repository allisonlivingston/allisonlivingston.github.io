import React, { useState } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import Loader from "./Loader";

const SkillsModal = ({ setIsModalVisible }) => {
    const [isLoading, setIsLoading] = useState(true);
    const icons = [ReactIcon, JavaScriptIcon, HtmlIcon, CssIcon, JsonIcon, NodeIcon, ReduxIcon, NpmIcon, MuiIcon, XdIcon, FigmaIcon, AxiosIcon, BitbucketIcon, CypressIcon, ExpressIcon, GitIcon, HerokuIcon, HomebrewIcon, JestIcon, JiraIcon, JqueryIcon, PostgresqlIcon, PostmanIcon, ReactNavIcon, SassIcon, ReactRouterIcon, SlackIcon, SourcetreeIcon, StorybookIcon, TailwindIcon, TypeScriptIcon, VscodeIcon, VueIcon, XcodeIcon];

    const onLoad = (index) => {
        if(index === icons.length - 1) {
            setIsLoading(false);
        }
    }

    return (
        <div style={styles.modalWrapper}>
            <>
                <div style={styles.modalOverlay} onClick={() => setIsModalVisible(false)}></div>
                <div style={styles.modalContent}>
                    <div className="w-full flex relative py-4">
                        <h2 className="w-full tracking-widest text-xl font-bold" style={{ fontFamily: "Archivo Narrow" }}>SKILLS</h2>
                        <div>
                            <CloseIcon className="absolute right-0 mr-5 !text-3xl cursor-pointer" onClick={() => setIsModalVisible(false)} />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center w-full h-dvh overflow-scroll">
                        {
                            icons?.map((item, i) => {
                                return (
                                    <img key={i} className="skillIcon h-28" src={item} onLoad={() => onLoad(i)} style={{ display: isLoading ? "none" : "flex" }} />
                                )
                            })
                        }
                        { isLoading && <div className="w-full h-full flex bg-white relative">
                            <Loader origin={"skills"} />
                        </div>}
                    </div>
                    
                </div>
            </>
        </div>
    )
};

let styles = {
    modalWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: 1
    },
    modalOverlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100%",
        width: "100%",
        zIndex: 2
    },
    modalContent: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "90%",
        borderRadius: "5px",
        padding: "10px 0",
        zIndex: 3,
        backgroundColor: "white",
        border: "solid black 2px",
        maxWidth: "700px"
    }
  }

export default SkillsModal;