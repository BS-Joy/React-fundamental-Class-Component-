function BoilingVerdict({celcius = 0}){
    if(celcius >= 100){
        return <p>Water will boil</p>
    }
    else {
        return <p>Water would no boil</p>
    }
}

export default BoilingVerdict;