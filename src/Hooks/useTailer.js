
import { options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTailer } from '../utils/MovieSlice';
import { useEffect } from 'react';
const useTailer = (props) => {
    const  Tailerid  = props;
    const dispatch = useDispatch();
    useEffect(() => {
        getVideoBackground();
    }, []);

    const getVideoBackground = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + Tailerid + "/videos?language=en-US", options)
        const json = await response.json();
        const filteredVideos = json.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
        const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
        dispatch(addTailer(trailer));
    }
}

export default useTailer
