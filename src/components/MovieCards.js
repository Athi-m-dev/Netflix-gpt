import { CDN_IMG } from '../utils/constants';
const MovieCards = ({ posterpath, title }) => {
    return (
        <div className='w-[200px] pr-4'>
            <img key={posterpath} src={CDN_IMG + posterpath} alt={title} />
        </div>
    )
}

export default MovieCards
