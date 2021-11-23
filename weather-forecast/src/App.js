import { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import LocationSearch from "./components/location/LocationSearch";
import Card from "./components/UI/Card";
import Header from "./components/UI/Header";
import WeatherForecast from "./components/weather/WeatherForecast";
import WeatherSummary from "./components/weather/WeatherSummary";

const weatherItems = [
  {
      id: "item1",
      name: "Mon",
      fullName: "Monday",
      currDate: "15.11",
      icon: "/images/day.svg",
      temperature: "20"
  },
  {
      id: "item2",
      name: "Tue",
      fullName: "Tuesday",
      currDate: "16.11",
      icon: "/images/cloudy-day-1.svg",
      temperature: "18"
  },
  {
      id: "item3",
      name: "Wed",
      fullName: "Wednesday",
      currDate: "17.11",
      icon: "/images/day.svg",
      temperature: "25"
  },
  {
      id: "item4",
      name: "Thu",
      fullName: "Thusday",
      currDate: "18.11",
      icon: "/images/rainy-1.svg",
      temperature: "20"
  },
  {
      id: "item5",
      name: "Fri",
      fullName: "Friday",
      currDate: "19.11",
      icon: "/images/rainy-1.svg",
      temperature: "15"
  },
  {
      id: "item6",
      name: "Sat",
      fullName: "Saturday",
      currDate: "20.11",
      icon: "/images/snowy-1.svg",
      temperature: "10"
  },
  {
      id: "item7",
      name: "Sun",
      fullName: "Sunday",
      currDate: "21.11",
      icon: "/images/snowy-2.svg",
      temperature: "11"
  }
]


function App() {

  const [locationData, setLocationData] = useState({
    city: "Sofia",
    country: "BG"
  });

  const onSearchHandler = (data) => {
    setLocationData(data);
  }



  console.log(locationData);

  return (
    <Fragment>
      <Header />
      <LocationSearch onLocationSearch={onSearchHandler} />
      <Card>
        <WeatherSummary data={locationData}/>
      </Card>
      <Card>
        <WeatherForecast items={weatherItems} />
      </Card>
    </Fragment>

  );
}

export default App;
