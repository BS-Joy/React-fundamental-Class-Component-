import React from "react";
import WithCounter from "./withCounter";

const HoverCounter = (props) => {
    const { count, incrementCount } = props
    return (
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    );
}

export default WithCounter(HoverCounter);