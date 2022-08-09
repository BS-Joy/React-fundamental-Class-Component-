import React from "react";
import WithCounter from "./withCounter";

const ClickCounter = (props) => {
    const { count, incrementCount } = props
    return (
        <button type="button" onClick={incrementCount}>Click {count} times</button>
    );
}

export default WithCounter(ClickCounter);