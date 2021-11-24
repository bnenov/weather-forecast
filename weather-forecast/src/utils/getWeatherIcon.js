export const getWeatherIcon = (openWeatherMapIconId) => {
    switch(openWeatherMapIconId) {
        case '01d': return 'day.svg';
        case '01n': return 'night.svg';
        case '02d': return 'cloudy-day-1.svg';
        case '02n': return 'cloudy-night-1.svg';
        case '03d': return 'cloudy-day-2.svg';
        case '03n': return 'cloudy-night-2.svg';
        case '04d': return 'cloudy-day-3.svg';
        case '04n': return 'cloudy-night-3.svg';
        case '09d': 
        case '09n': return 'rainy-3.svg';
        case '10d':
        case '10n': return 'rainy-7.svg';
        case '11d':
        case '11n': return 'thunder.svg';
        case '13d':
        case '13n': return 'snowy-6.svg';
        case '50d':
        case '50n': return 'cloudy.svg';
    }
}