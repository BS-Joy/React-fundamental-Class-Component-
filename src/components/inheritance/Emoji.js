import React from "react";

class Emoji extends React.Component {
    addEmoji = (text, emoji) => emoji + text + emoji;
    render(overideText) {

        let text = 'This is a text';
        
        if (overideText) text = overideText;

        return <h1>{text}</h1>;
    }
}

export default Emoji;