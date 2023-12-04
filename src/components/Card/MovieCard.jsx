import { AiOutlineStar } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import "./MovieCard.css";
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, category }) => {
    return (
        <Link to={`/movies/${category}/${movie?.id}`} style={{color: 'white', textDecoration:"none"}}>
        <div className='card' >
            <img src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path} alt={movie?.original_title} />
            <div className="card__overlay">
                <div className='card__title'>
                    <h1>{movie?.original_title}</h1>
                </div>
                <div className='card__runtime'>
                    <span className='card__releasedate'>{movie?.release_date}
                        <MdDateRange />
                    </span>
                    <span className='pipeline'></span>
                    <span className='card__rating'>{movie?.vote_average}
                        <AiOutlineStar />
                    </span> 
                </div>                                   
            </div>
        </div>
        </Link>
        
    )
}
export default MovieCard;
