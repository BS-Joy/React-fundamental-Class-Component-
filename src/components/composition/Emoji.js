import React from "react";

class Emoji extends React.Component {
    addEmoji = (text, emoji) => emoji + text + emoji;

    render() {
        return this.props.children({ emoji: this.addEmoji })
    }
}

export default Emoji;