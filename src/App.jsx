import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import './App.css'
import Header from './components/Header/Header';
import UpcomingMovies from './pages/UpcomingMovies/UpcomingMovies';
import TopRatedMovies from './pages/TopRated/TopRatedMovies';
import PopularMovies from './pages/PopularMovies/PopularMovies';
import MovieDetails from './pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth/signin" element={<SignIn />}/>
          <Route path="/auth/signup" element={<SignUp />}/>
          <Route path="/movies/popular" element={<PopularMovies />}/>
          <Route path="/movies/upcoming" element={<UpcomingMovies />}/>
          <Route path="/movies/top_rated" element={<TopRatedMovies />}/>
          <Route path="/movies/:category/:id" element={<MovieDetails />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App;