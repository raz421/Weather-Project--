import { useEffect } from "react"
import { FavouriteContext } from "../context"
import { useLocalStorage } from "../Hook"

let FavouriteProvider=({children})=>{
    let [favourite,setFavourite]=useLocalStorage("favourite",[])
    let addTOFavourite=(latitude, longitude,location)=>{
        setFavourite([
            ...favourite,
            {
                latitude:latitude,
                longitude: longitude,
                location:location
    }])
    }
    let removeFavourite=(location)=>{
        let remove=favourite.filter(fav=>{
           return fav.location!=location
        })
        setFavourite(remove)
    }
    
    return (
        <FavouriteContext.Provider value={{favourite,addTOFavourite,removeFavourite}}>
            {children}
        </FavouriteContext.Provider>
    )
}
export default FavouriteProvider