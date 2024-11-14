const data = [
  { location: "Los Angeles", longitude: -118.2437, latitude: 34.0522 },
  { location: "New York", longitude: -74.006, latitude: 40.7128 },
  { location: "London", longitude: -0.1278, latitude: 51.5074 },
  { location: "Paris", longitude: 2.3522, latitude: 48.8566 },
  { location: "Tokyo", longitude: 139.6917, latitude: 35.6895 },
  { location: "Sydney", longitude: 151.2093, latitude: -33.8688 },
  { location: "Moscow", longitude: 37.6176, latitude: 55.7558 },
  { location: "Dhaka", longitude: 90.4125, latitude: 23.8103 },
  { location: "New Delhi", longitude: 77.209, latitude: 28.6139 },
  { location: "Mumbai", longitude: 72.8777, latitude: 19.076 },
];

let getLocation = () => {
  return data;
};
let getLoactionByName = (loction) => {
  if (!location) {
    return null;
  }
  let filttered = data.filter((value) => {
    return value.location === loction;
  });
  if (filttered.length > 0) {
    return filttered[0];
  } else {
    return {
      location: "",
      longitude: 0,
      latitude: 0,
    };
  }
};
export {getLoactionByName,getLocation}