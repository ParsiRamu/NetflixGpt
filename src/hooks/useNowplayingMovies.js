import { MovieAPI_options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowplayingMovies = ()=>{

    const dispatch = useDispatch();
    const getMoviesApi = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        MovieAPI_options,
      );
      const json = await data.json();
      
      dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
      getMoviesApi();
    }, []);

}


export default useNowplayingMovies;