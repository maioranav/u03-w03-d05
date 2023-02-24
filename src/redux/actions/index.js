export const FOUND_DATA = "FOUND_DATA";
export const ARTIST_FETCHED = "ARTIST_FETCHED"
export const ALBUM_FETCHED = "ALBUM_FETCHED"
export const SETPLAYER = "SETPLAYER"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"

export const fetchData = (query) => {

   let headers = new Headers({
      // sets the headers
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
   })


   return async (dispatch, getState) => {
      try {
         let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            query,
            {
               method: 'GET',
               headers,
            }
         ) // gets the information
         if (response.ok) {
            let result = await response.json() // transforms the response to json
            let songInfo = result.data
            dispatch({ type: FOUND_DATA, payload: songInfo })
         } else {
            console.log('error')
         }
      } catch (err) {
         console.log(err)
      }
   }
}

export const fetchByID = (query, type) => {

   //query = ID album o artista
   //type STRINGA "album/artist"

   let headers = new Headers({
      // sets the headers
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
   })


   return async (dispatch, getState) => {
      try {
         let response = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/${type}/${query}`,
            {
               method: 'GET',
               headers,
            }
         ) // gets the information
         if (response.ok) {
            let result = await response.json() // transforms the response to json
            let songInfo = result
            type === "artist" ? dispatch({ type: ARTIST_FETCHED, payload: songInfo }) : dispatch({ type: ALBUM_FETCHED, payload: songInfo })
            if (type === "artist") { fetchData(songInfo.name) }
         } else {
            console.log('error')
         }
      } catch (err) {
         console.log(err)
      }
   }
}
