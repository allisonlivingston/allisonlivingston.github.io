import React from "react";

const Nav = () => {
    const titles = ["About", "Projects", "Contact"];
    const links = ["about", "projects", "contact"];
    return(
        <section style={{ ...styles.flexRow, ...styles.navWrapper }}>
            <div>
                <a style={{ ...styles.navItem }} href="#home">Home</a>
            </div>
            <div style={styles.flexRow}>
                { titles.map((title, i) => {
                    return (
                        <a key={`nav-${title}`} style={{ ...styles.h2, ...styles.navItem }} href={`#${links[i]}`}>{title}</a>
                    )
                })}
            </div>
        </section>
    )
}

let styles = {
    h2: {
        color: "blue"
    },
    navWrapper: {
        justifyContent: "space-between",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1
    },
    navItem: {
        margin: 50,
        cursor: "pointer",
        textDecoration: "none"
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
}

export default Nav;