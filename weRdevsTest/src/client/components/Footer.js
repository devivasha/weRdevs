import React from 'react';

const Footer = {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgb(235, 195, 64)",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%"
};

export default ()=> {
    return(
        <div style={Footer}>
            <p>This is some content in sticky footer</p>
        </div>
    );
}