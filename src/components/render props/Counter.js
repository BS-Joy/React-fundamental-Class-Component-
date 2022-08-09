import React from "react";

class Counter extends React.Component {
    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState(
            (prevCount) => ({ count: prevCount.count + 1 })
        )
    }

    render() {
        const { count } = this.state;
        const { children } = this.props
        return children(count, this.incrementCount)
    }
}

export default Counter;