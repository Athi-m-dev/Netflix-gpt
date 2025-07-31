import { useEffect } from "react"
import { options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/MovieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, [])

    const getTopRatedMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
        const data = await response.json();
        console.log("Top Rated Movies:", data.results);
        dispatch(addTopRatedMovies(data.results));
    }
}

export default useTopRatedMovies; 