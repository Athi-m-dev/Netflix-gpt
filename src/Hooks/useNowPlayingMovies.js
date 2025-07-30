import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlaying } from "../utils/MovieSlice"; // Assuming you have a setNow
import { options } from "../utils/constants"; // Import your options for fetch request

const useNowPlayingMovies = () => {
    useEffect(() => {
        nowPlayingMovies();
    }, []);


    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
    
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const json = await response.json();
        dispatch(setNowPlaying(json.results)); // Assuming you have a setNowPlaying action in your movieSlice

    }

}

export default useNowPlayingMovies;