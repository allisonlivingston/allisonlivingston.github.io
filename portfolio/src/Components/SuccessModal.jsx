import React from "react";

const SuccessModal = ({ setIsModalVisible }) => {
    return (
        <div style={styles.modalWrapper}>
            <div style={styles.modalOverlay} onClick={() => setIsModalVisible(false)}></div>
            <div className="absolute bg-white flex flex-col justify-center items-end z-10 border-2 border-black border-solid rounded py-4 px-6" style={{ fontFamily: "Archivo Narrow" }}>
                <h2 className="text-green-600 tracking-wider text-xl py-3 font-bold">YOUR MESSAGE WAS SENT!</h2>
                <button className="text-base bg-white hover:bg-purple-400 py-1 px-4" style={{ cursor: "pointer", border: "solid 2px black", borderRadius: "3px", fontFamily: "Archivo Narrow", letterSpacing: 1, fontWeight: "bold" }} onClick={() => setIsModalVisible(false)}>OK</button>
            </div>
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
    }
  }

export default SuccessModal;