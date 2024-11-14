import { WeatherContext } from "../context";
import { useWeather } from "../Hook";

let WeatherProvider = ({ children }) => {
  let { weatherData, loading, error } = useWeather();
  return (
    <WeatherContext.Provider value={{weatherData,loading,error}}>
        {children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider ;
