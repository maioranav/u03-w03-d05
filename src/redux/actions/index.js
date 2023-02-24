export const RENDER_HOME = "RENDER_HOME";
export const FOUND_DATA = "FOUND_DATA";

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