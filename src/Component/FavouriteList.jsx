import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../context";

export default function FavouriteList() {
  let { favourite } = useContext(FavouriteContext);
  let {setSelectedLocation}=useContext(LocationContext)
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourite.length > 0 ? (
          favourite.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              <a onClick={()=>setSelectedLocation({...fav})}>
              {fav.location}
              </a>
            </li>
          ))
        ) : (
          <p>Nothing is here</p>
        )}
      </ul>
    </div>
  );
}
