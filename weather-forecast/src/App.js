import { Fragment } from "react";
import LocationSearch from "./components/location/LocationSearch";
import Card from "./components/UI/Card";
import Header from "./components/UI/Header";
import WeatherSummary from "./components/weather/WeatherSummary";

function App() {
  return (
    <Fragment>
      <Header />
      <LocationSearch />
      <Card>
        <WeatherSummary />
      </Card>

    </Fragment>

  );
}

export default App;
