import { useDispatch } from "react-redux";
import { MovieAPI_options } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MovieAPI_options,
    );

    const json = await data.json();
   
    const filteredData = json.results?.filter(
      (video) => video.type === "Trailer",
    );
    const trailerData = filteredData.length ? filteredData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailerData));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailor;
