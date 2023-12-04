import { useEffect, useState } from 'react';
import popularMovies from '../../data/popularMovies';
import topRatedMovies from '../../data/topRatedMovies';
import upComingMovies from '../../data/upComingMovies';
import './MovieDetails.css';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const {category, id} = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    const getMovieById = () => {
        const movieDB = category === 'popular' ? popularMovies : category === 'upcoming' ? upComingMovies : topRatedMovies;

        const movie = movieDB.find((m) => m.id === parseInt(id));

        setSelectedMovie(movie);
    }
    useEffect(() => {
        getMovieById();   
    }, [])

    return (
        <div className='movie__details__container'>
            <div className='movie__details__image__container'>
                <img src={"https://image.tmdb.org/t/p/original/" + selectedMovie?.backdrop_path} alt="" />
            </div>
            <div className="movie__details">
                <div className="movie__details__left">
                    <div className="movie__posterBox">
                        <img src={"https://image.tmdb.org/t/p/original/" + selectedMovie?.poster_path} alt="" />
                    </div>
                </div>
                <div className="movie__details__right">
                    <h1 className="movie__title">
                        {selectedMovie?.original_title}
                    </h1>
                    <p className="movie__description">
                        {
                            selectedMovie?.overview
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails;