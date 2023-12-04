import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <div className="headerLeft">
                <Link to={"/"}>
                    <img src="/public/assets/logo.png" alt="IMDB Logo" />
                </Link>
                <Link to={"/movies/top_rated"}>
                    <span >Top Rated</span>
                </Link>
                <Link to={"/movies/upcoming"}>
                    <span>Upcoming</span>
                </Link>
                <Link to={"/movies/popular"}>
                    <span>Popular</span>
                </Link>
            </div>
            <div className="headerRight">
                <div>
                    <Link to={"/auth/signup"}>
                        <AiOutlineUser />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Header;