import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFareheit } from "../../lib/converter";

class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c'
    }

    handleChange = (event, scale) => {
        this.setState({
            temperature: event.target.value,
            scale
        })
    }
    render(){
        const { temperature, scale } = this.state;
        const celcius = scale === 'f' ?  convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFareheit): temperature;
        return(
            <div className="container">
                <TemperatureInput scale='c'temperature={celcius} handleChange={this.handleChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} handleChange={this.handleChange} />
                <BoilingVerdict celcius={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;