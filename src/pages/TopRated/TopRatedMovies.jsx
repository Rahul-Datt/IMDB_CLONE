import MoviesList from "../../components/MoviesList/MoviesList";
import topRatedMovies from "../../data/topRatedMovies"

const TopRatedMovies = () => {
    return (
        <div>
            <MoviesList title={"Top Rated Movies"} movies={topRatedMovies} category={'top_rated'}/>
        </div>
    )
}
export default TopRatedMovies;