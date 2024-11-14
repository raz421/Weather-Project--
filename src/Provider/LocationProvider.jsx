import { useState } from "react";
import { LocationContext } from "../context";

function LoctionProvider({ children }) {
  let [selctedLocation, setSelectedLocation] = useState({
    location: "",
    longitude: 0,
    latitude: 0,
  });
  return (
    <LocationContext.Provider value={{ selctedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
export default LoctionProvider;
