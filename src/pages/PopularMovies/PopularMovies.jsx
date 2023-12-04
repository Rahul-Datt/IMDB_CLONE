import MoviesList from "../../components/MoviesList/MoviesList";
import popularMovies from "../../data/popularMovies";

const PopularMovies = () => {
    return (
        <div>
            <MoviesList title={"Popular Movies"} movies={popularMovies} category={'popular'}/>
        </div>
    )
}
export default PopularMovies;