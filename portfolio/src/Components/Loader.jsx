import React from "react";

const Loader = ({ origin }) => {
    return (
        <div style={{ ...styles.modalWrapper, position: (origin === "skills") ? "relative" : "fixed" }}>
            <div style={{ ...styles.modalOverlay, backgroundColor: (origin === "skills") ? "white" : "rgba(0, 0, 0, 0.5)", position: (origin === "skills") ? "inherit" : "fixed" }}></div>
            <div className="absolute w-auto h-auto bg-white text-black flex justify-center items-center z-10 py-4 px-6 border-2 border-black border-solid rounded tracking-wider text-xl" style={{ fontFamily: "Archivo Narrow" }}>LOADING...</div>
        </div>
    )
}

let styles = {
    modalWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        zIndex: 1
    },
    modalOverlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        zIndex: 2
    }
  }

export default Loader;