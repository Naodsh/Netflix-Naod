import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
instance.get();

// api.themoviedb.org/3/discover/tv?api_key=99b23bc9598437eadfcbf34508ae0f6f&with_networks=213

export default instance;