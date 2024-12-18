import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const ProjectModal = ({ data, setIsModalVisible, setSelectedProject }) => {
    return (
        <div style={styles.modalWrapper}>
            <>
                <div style={styles.modalOverlay} onClick={() => { setIsModalVisible(false); setSelectedProject({}); }}></div>
                <div className="bg-white w-11/12 sm:w-3/4 h-4/5" style={styles.modalContent}>
                    <div className="flex w-full sm:w-4/5 mb-5 sm:mb-8">
                        <h3 className="w-full text-2xl uppercase tracking-widest" style={{ fontFamily: "Archivo Narrow" }}>{data.name}</h3>
                        <CloseIcon className="!text-3xl cursor-pointer" onClick={() => setIsModalVisible(false)} />
                    </div>
                    <div className="bg-white w-full sm:w-4/5 h-auto flex flex-col justify-evenly items-center m-0 overflow-scroll">
                        <div className="w-full flex flex-col sm:flex-row justify-center items-center">
                            <img className="w-60 sm:w-64 md:w-72 lg:w-80 shadow-[0px_0px_6px_0px_#6A6A6A] rounded" src={data.img} />
                            <div className="flex flex-row sm:flex-col sm:ml-4 md:ml-10 mt-5 sm:mt-0">
                                <div className="hover:bg-purple-400 p-3 rounded mb-0 sm:mb-2">
                                    <a className="underline underline-offset-8" href={data.href} target="_blank" rel="noreferrer">Live App</a>
                                </div>
                                <div className="hover:bg-purple-400 p-3 rounded">
                                    <a className="underline underline-offset-8" href={data.github} target="_blank" rel="noreferrer">View Code</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full mt-10">
                            <h3 className="pb-2 tracking-widest text-base font-bold" style={{ fontFamily: "Archivo Narrow" }}>TECHNOLOGIES USED</h3>
                            <ul className="w-4/5 grid grid-cols-2 sm:grid-cols-4 text-left">
                                { data.tech.map((item, i) => {
                                    return(
                                        <li key={i} className="">{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "5px",
        zIndex: 3,
        border: "solid black 2px",
        maxWidth: "700px",
        maxHeight: "600px",
        padding: "20px"
    }
  }

export default ProjectModal;