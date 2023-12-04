import { Link } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="imdb-logo">
                <img src="/public/assets/logo.png" alt="imdb logo" />
            </div>
            <div className="signup-form-container">
                <form>
                    <h1>Create Account</h1>
                    <div>
                        <label htmlFor="your-name"> Your Name </label>
                        <input 
                        type="text" 
                        id="your-name"
                        placeholder="First and Last Name" />
                    </div>
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
                        <label htmlFor="confirm-password"> Confirm Password </label>
                        <input type="password"
                         id="confirm-password" 
                         placeholder="Enter Password" />
                    </div>
                    <div>
                        <button>Create Your IMDB Account</button>
                    </div>
                </form>
                <hr />
                <div className="have-account-container">
                    <p>Already have account? </p>
                    <Link to={"/auth/signin"} > Signin </Link>
                </div>
            </div>
        </div>
    )
}
export default SignUp;