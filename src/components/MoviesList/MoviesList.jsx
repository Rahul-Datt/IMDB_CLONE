import "./MoviesList.css";
import MovieCard from '../Card/MovieCard';

const MoviesList = ({title, movies, category}) => {
    return (
        <div className="movies__list">
            <div className="movies__list__title">
                <h1>{title}</h1>
            </div>
            <div className='movies__list__cards__container'>
                {
                    movies?.map((movie, idx) => {
                        return (
                            <MovieCard movie={movie} key={idx} category={category}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default MoviesList