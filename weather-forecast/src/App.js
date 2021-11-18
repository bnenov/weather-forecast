import { Fragment } from "react";
import LocationSearch from "./components/location/LocationSearch";
import Card from "./components/UI/Card";
import Header from "./components/UI/Header";
import WeatherForecast from "./components/weather/WeatherForecast";
import WeatherSummary from "./components/weather/WeatherSummary";

const weatherItems = [
  {
      id: "item1",
      name: "Mon",
      icon: "/images/day.svg",
      temperature: "20"
  },
  {
      id: "item2",
      name: "Tue",
      icon: "/images/cloudy-day-1.svg",
      temperature: "18"
  },
  {
      id: "item3",
      name: "Wed",
      icon: "/images/day.svg",
      temperature: "25"
  },
  {
      id: "item4",
      name: "Thu",
      icon: "/images/rainy-1.svg",
      temperature: "20"
  },
  {
      id: "item5",
      name: "Fri",
      icon: "/images/rainy-1.svg",
      temperature: "15"
  },
  {
      id: "item6",
      name: "Sat",
      icon: "/images/snowy-1.svg",
      temperature: "10"
  },
  {
      id: "item7",
      name: "Sun",
      icon: "/images/snowy-2.svg",
      temperature: "11"
  }
]

function App() {
  return (
    <Fragment>
      <Header />
      <LocationSearch />
      <Card>
        <WeatherSummary />
      </Card>
      <Card>
        <WeatherForecast items={weatherItems} />
      </Card>
    </Fragment>

  );
}

export default App;
