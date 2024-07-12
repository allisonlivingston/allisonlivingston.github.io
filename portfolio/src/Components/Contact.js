import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");

    const submitMessage = (e) => {
        e.preventDefault();
        console.log('name = ', name)
        console.log('email = ', emailAddress)
        console.log('message = ', message)
    };

    return(
        <div id="contact" style={{ ...styles.flexFullWidth, flexDirection: "column", alignItems: "center" }}>
            <h1>
                Contact
            </h1>
            <form style={styles.formWrapper} onSubmit={submitMessage}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.formInput} />
                <input placeholder="Email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} style={styles.formInput} />
                <textarea style={{ width: "100%", height: "200px"}} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <div style={{ ...styles.flexFullWidth, flexDirection: "row", justifyContent: "space-between" }}>
                    <p>Error text</p>
                    <button type="submit" style={{ cursor: "pointer" }}>SEND</button>
                </div>
            </form>
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
        width: "500px",
        margin: 0,
        padding: 0
    },
    formInput: {
        width: "100%",
        margin: 0,
        padding: 0
    }
}

export default Contact;