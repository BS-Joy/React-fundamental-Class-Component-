import React from "react";

const scaleNames = {
    c: 'Celcius',
    f: 'Farenheit'
}

function TemperatureInput ({ scale, temperature, handleChange }) {
        return (
            <fieldset>
                <legend>Enter Temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={(event) => handleChange(event, scale)} />
            </fieldset>
        );
}

export default TemperatureInput;