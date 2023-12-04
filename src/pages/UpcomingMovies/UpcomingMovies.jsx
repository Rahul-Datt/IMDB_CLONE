import MoviesList from "../../components/MoviesList/MoviesList";
import upComingMovies from '../../data/upComingMovies';

const UpcomingMovies = () => {
    return (
        <div>
            <MoviesList title={"Upcoming Movies"} movies={upComingMovies} category={'upcoming'}/>
        </div>
    )
}
export default UpcomingMovies;