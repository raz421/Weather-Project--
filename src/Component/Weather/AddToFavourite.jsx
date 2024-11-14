import { useContext, useEffect, useState } from "react";
import Heart from "../../assets/heart.svg"
import Red_Heart from "../../assets/heart-red.svg"
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavorite(){
  let {favourite,addTOFavourite,removeFavourite}=useContext(FavouriteContext)
  let {weatherData}=useContext(WeatherContext)
  let{ latitude,longitude,location}=weatherData
  let [isFavourite,setIsFavourite]=useState(false)
  let handleFavourite=()=>{
    let found=favourite.find(fav=>fav.location==location)
    if(!found){
      addTOFavourite(latitude,longitude,location)
    }else{
      removeFavourite(location)
    }
    setIsFavourite(!isFavourite)
  }
  useEffect(()=>{
    let found=favourite.find((fav)=>{
      return fav.location===location
    })
    setIsFavourite(found)
  },[])
    return (
        <div className="md:col-span-2">
                <div className="flex items-center justify-end space-x-6">
                  <button
                  onClick={handleFavourite}
                  className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>{isFavourite?"Remove To Favourite":"Add To Favourite"}</span>
          <img src={isFavourite?Red_Heart:Heart} alt=""/>
                  </button>
                </div>
              </div>
    );
}