import { Link } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="signin-container">
            <div className="imdb-logo">
                <img src="/public/assets/logo.png" alt="imdb logo" />
            </div>
            <div className="signin-form-container">
                <form>
                    <h1>Sign In</h1>
                    <div>
                        <label htmlFor="email"> Email </label>
                        <input type="email"
                         id="email" 
                         placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="password"> Password </label>
                        <input type="password"
                         id="password" 
                         placeholder="Enter Password" />
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </form>
                <hr />
                <div className="dont-have-account-container">
                    <p>Don't have account? </p>
                    <Link to={"/auth/signup"} > 
                        <button>Sign Up</button>
                     </Link>
                </div>
            </div>
        </div>
    )
}
export default SignIn;