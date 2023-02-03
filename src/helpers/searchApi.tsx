import axios from "axios"
const searchApi = axios.create({
    baseURL:"https://api.mapbox.com/geocoding/v5/mapbox.places",
    params:{
        limit:5,
        country:"ar",
        access_token:"pk.eyJ1IjoiZ3VpZG9kZXZqc2pyIiwiYSI6ImNsYng0ZG13MjE4b2Ezb3FvaWdlOWx2bjIifQ.u6htqs0dnoZ48UArWEAAxQ"
    }
})
export default searchApi