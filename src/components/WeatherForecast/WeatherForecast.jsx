const WeatherForecastSection = ({weatherForecasts}) => {
    const {day, img, imgAlt, conditions, time} =  weatherForecasts;
    return (
        <>
            <div className="weather">
                <h2>Day of the Week</h2>
                <h3>{day}</h3>
                <img src={img} alt={imgAlt} />
                <p><span>conditions: {conditions} </span>current weather conditions</p>
                <p><span>time: {time} </span>time of day</p>
            </div>
        </>
    )
}

export default WeatherForecastSection;
