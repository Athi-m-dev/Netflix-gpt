import { useEffect } from "react"
import { options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MovieSlice";
const usePopularMovies = () => {
    const dispatch  = useDispatch();

    useEffect(()=> {
        getPopularMovies();
    },[])

    const getPopularMovies = async () => {
        const response = await fetch ("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
        const data = await response.json();
        console.log(data.results);
        dispatch(addPopularMovies(data.results));
    }
}

export default usePopularMovies;