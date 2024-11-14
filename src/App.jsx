
import Page from "./Page";
import { FavouriteProvider, LoctionProvider } from "./Provider";
import WeatherProvider from "./Provider/WeatherProvider";

function App() {
  return (
    <LoctionProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page/>
        </FavouriteProvider>
      </WeatherProvider>
    </LoctionProvider>
  );
}

export default App;
