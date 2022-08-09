function toCelsius(fareheit){
    return ((fareheit - 32)*5)/9;
}

function toFareheit(celcius){
    return (celcius * 9) / 5 + 32;
}

function convert(temperatur, convertTo){
    const input = parseFloat(temperatur);
    if(Number.isNaN(input)){
        return '';
    }

    const output = convertTo(input);
    const round = Math.round(output * 1000) /1000;
    return round.toString();
}

export {toCelsius, toFareheit, convert};
