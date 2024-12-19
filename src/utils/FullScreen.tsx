import "./FullScreen.css";
import React from "react";

const FullScreen = (props: React.PropsWithChildren) => {
    return <div className="fullScreen">
        {props.children}
    </div>
}

export default FullScreen;