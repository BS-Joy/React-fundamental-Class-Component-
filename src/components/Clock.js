import React from "react";
import Button from "./Button";


class Clock extends React.Component {
    state = { date: new Date(), locale: "bn-BD" };

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({ date: new Date() });
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        })
    }
    render() {
        const { date, locale } = this.state;

        // let button;

        // if (locale === "bn-BD") {
        //     button = (
        //         <Button change={this.handleClick} locale="en-US">
        //             Click Here
        //         </Button>
        //     );
        // }
        // else {
        //     button = (
        //         <Button change={this.handleClick} locale="bn-BD">
        //             Click Here
        //         </Button>
        //     );
        // }

        return (
            <div>
                <h1>Hello world</h1>
                <h2>{locale === 'bn-BD' ? 'সময় এখন': 'Time is'} : {date.toLocaleTimeString(locale)}</h2>
                {/* turnery operator */}
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show = {false}/>
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show />
                )}
            </div>
        );

    }
}

export default Clock;