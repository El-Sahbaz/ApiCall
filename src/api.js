import axios from 'axios';


const searchImages = async (term) =>
    {
      const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
          Authorization:'Client-ID rQaH0amJzBdzyCUPmwN4nob8rWJRpWdccJzcbHiWIDk'
        },
        params:{
          query:term
        }
      })
      return response.data.results
    }

    export default searchImages