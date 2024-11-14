import { useContext } from "react";
import Hazeicon from "../../assets/haze.svg";
import Cloudicon from "../../assets/icons/cloud.svg";
import Humidityicon from "../../assets/icons/humidity.svg";
import Snowicon from "../../assets/icons/snow.svg";
import Sunnyicon from "../../assets/icons/sunny.svg";
import Windicon from "../../assets/icons/wind.svg";
import Pin from "../../assets/pin.svg";
import Rainicon from "../../assets/rainy.svg";
import Thundericon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
export default function WeatherHeader() {
  let { weatherData } = useContext(WeatherContext);
  let { climate, temperature, time, location } = weatherData;
 let getWeathericon=(climate)=>{
  switch (climate) {
    case "Rain":
      return Rainicon;

    case "Snow":
      return Snowicon;
    case "Clear":
      return Sunnyicon;

    case "Clouds":
      return Cloudicon;

    case "Wind":
      return Windicon;

    case "Humidity":
      return Humidityicon;
    case "Sunny":
      return Sunnyicon;
    case "Haze":
      return Hazeicon;
    case "Mist":
      return Hazeicon;
    case "Fog":
      return Hazeicon;
    case "Thunder":
      return Thundericon;
    default:
      return Sunnyicon
  }
 }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeathericon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{time}</p>
    </div>
  );
}
