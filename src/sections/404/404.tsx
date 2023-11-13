import React, { useState, useEffect, useRef } from "react";
import TypingBoard from "../../components/TypingBoard/typingBoard";
import './404.css';

function NotFound() {
    return (
        <>
            <div className="copy-container center-xy">
                <pre> &lt;Error&gt;</pre>
                <div>
                    <h3 style={{lineHeight: '2em'}}><TypingBoard flickering  text={"404, page not found."} /></h3>
                </div>
                <pre> &lt;/Error&gt;</pre>
            </div>
        </>
    );
}

export default NotFound;
