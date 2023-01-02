const API_KEY = "99b23bc9598437eadfcbf34508ae0f6f";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=eng-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=eng-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
