import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ setIsLoading, setIsModalVisible }) => {
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [messageErr, setMessageErr] = useState("");

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_PUBLIC_KEY)
    }, []);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailAddress);
    }

    const validateFormFields = async () => {
        let validEmail = validateEmail();
        if(name !== "" && validEmail && message !== "") {
            return true;
        } else {
            if(name === "") setNameErr("Please enter your name.");
            if(!validEmail && emailAddress === "") {
                setEmailErr("Please enter your email address.");
            } else if(!validEmail && emailAddress !== "") {
                setEmailErr("Please enter a valid email address.");
            }
            if(message === "") setMessageErr("Please enter a message.");
            return false;
        }
    };

    const clearErrs = () => {
        setNameErr("");
        setEmailErr("");
        setMessageErr("");
    };

    const submitMessage = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        clearErrs();
        let isFormValid = await validateFormFields();
        if(isFormValid) {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                { name, emailAddress, message }
            )
            .then((result) => {
                console.log('Message sent successfully:', result.text);
                setIsModalVisible(true);
            })
            .catch((error) => {
                console.error('Error sending message:', error);
            })
            .finally(() => {
                setName("");
                setEmailAddress("");
                setMessage("");
            })
        }
        setIsLoading(false);
    };

    return(
        <div id="contact" style={{ ...styles.flexFullWidth, flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", backgroundColor: "transparent" }}>
            <h1 className="text-4xl sm:text-5xl mb-6 sm:mb-8" style={{ marginTop: "150px", fontFamily: 'Julius Sans One' }}>
                Contact
            </h1>
            <div className="w-full flex flex-col items-center">
                <form style={styles.formWrapper} onSubmit={submitMessage}>
                    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.formInput} />
                    { (nameErr !== "") && <p className="w-full text-red-500 text-left">{nameErr}</p>}
                    <input placeholder="Email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} style={styles.formInput} />
                    { (emailErr !== "") && <p className="w-full text-red-500 text-left">{emailErr}</p>}
                    <textarea style={{ width: "100%", height: "200px", marginTop: "5px", marginBottom: "5px", padding: "5px", border: "solid 2px black", borderRadius: "3px" }} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    { (messageErr !== "") && <p className="w-full text-red-500 text-left">{messageErr}</p>}
                    <div style={{ ...styles.flexFullWidth, flexDirection: "row", justifyContent: "flex-end", marginTop: "5px" }}>
                        <button type="submit" className="text-base tracking-widest bg-white hover:bg-purple-400 font-bold p-4 leading-4 cursor-pointer border-solid border-black border-2 rounded" style={{ fontFamily: "Archivo Narrow" }}>SEND</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

let styles = {
    flexFullWidth: {
        width: "100%",
        display: "flex"
    },
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "90%",
        maxWidth: "500px",
        margin: 0,
        padding: 0,
        marginBottom: "80px"
    },
    formInput: {
        width: "100%",
        marginTop: "5px",
        marginBottom: "5px",
        padding: "5px",
        border: "solid 2px black",
        borderRadius: "3px"
    }
}

export default Contact;