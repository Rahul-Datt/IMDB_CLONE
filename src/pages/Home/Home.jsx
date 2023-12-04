import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import popularMovies from '../../data/popularMovies';
import { AiOutlineStar } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md'
import MoviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
    return (
        <div>
            <Carousel showThumbs={false} transitionTime={3} autoPlay={true} infiniteLoop={true} showStatus={false}>
                {
                    popularMovies.map((movie, idx) => {
                        return (
                            <div key={idx}>
                                <div className="posterImage">
                                    <img src={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path} alt="" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="postImage__title">
                                        {movie?.original_title}
                                    </div>
                                    <div className="posterImage__runtime">
                                        <span className='posterImage__releasedate'>{movie?.release_date}
                                        <MdDateRange />
                                        </span>
                                        <span className='pipeline'></span>
                                        <span className='posterImage__rating'>{movie?.vote_average}
                                        <AiOutlineStar />
                                        </span>
                                    </div>
                                    <div className="posterImage__description">
                                        {movie?.overview}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
            <MoviesList title={"Popular Movies"} movies={popularMovies} category={'popular'}/>
        </div>
    )
}
export default Home;