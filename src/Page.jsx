import { useContext, useEffect, useState } from "react";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import SunnyImage from "./assets/backgrounds/sunny.jpg";
import ThunderStromImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import Header from "./Component/Header";
import WeatherBoard from "./Component/Weather/WeatherBoard";
import { WeatherContext } from "./context";

export default function Page() {
  let [climateImage, setClimateImage] = useState("");
  let { loading, weatherData } = useContext(WeatherContext);
  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyImage;

      case "Snow":
        return SnowImage;
      case "Clear":
        return ClearSkyImage;

      case "Clouds":
        return ScatterImage;

      case "Sunny":
        return SunnyImage;
      case "Haze":
        return FewCloudImage;
      case "Mist":
        return MistImage;
      case "Fog":
        return WinterImage;
      case "Thunder":
        return ThunderStromImage;
      default:
        return ClearSkyImage;
    }
  }
useEffect(()=>{
    let bgImage=getBackgroundImage(weatherData.climate)
    setClimateImage(bgImage)

},[weatherData.climate])
  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div
        style={{background:`url('${climateImage}')`}}
         className="bg-body 
         text-light  bg-no-repeat bg-cover h-screen grid place-items-center">
          <Header />
          <main>
            <WeatherBoard />
          </main>
        </div>
      )}
    </>
  );
}
