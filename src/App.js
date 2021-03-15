import React, { useState, useEffect } from 'react';
import Movielist from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import './scss/App.scss';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import SearchYear from './components/SearchYear';
import SearchLang from './components/SearchLang';
import AddWatched from './components/AddWatched';
import RemoveWatched from './components/RemoveWatched';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [searchYear, setSearchYear] = useState('');
	const [searchLang, setSearchLang] = useState('');
	const [watched, setWatched] = useState([]);

	const getMovieRequest = async (searchValue, searchYear, searchLang) => {
		if(searchValue === "" && searchYear === "" && searchLang === ""){
			searchValue = "dog";
			searchLang = "en-US";
		}
		const url = `https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=${searchLang}&include_adult=false&query=${searchValue}&year=${searchYear}`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if(responseJson.results){
			setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue, searchYear, searchLang);
	}, [searchValue, searchYear, searchLang]);

	useEffect(()=>{
		const watchedMovies = JSON.parse(
			localStorage.getItem('mmovies-watched')
			);
			if(watchedMovies){
				setWatched(watchedMovies);
			}
	}, [])

	const saveToLocal = (items) => {
		localStorage.setItem('mmovies-watched', JSON.stringify(items));
	}

	const addWatchedMovie = (movie) => {
		const newWatchedList = [...watched, movie];
		setWatched(newWatchedList);
		saveToLocal(newWatchedList);
	};
	
	const removeWatchedMovie = (movie) => {
		const newWatchedList = watched.filter(
			(watchedMovie) => watchedMovie.id !== movie.id
		);
		setWatched(newWatchedList);
		saveToLocal(newWatchedList);
	};

	return <div className="movie-app">
		<div className="row align-items-center mt-4 mb-4">			
			<SearchLang searchLang={searchLang} setSearchLang={setSearchLang} />
			<SearchYear searchYear={searchYear} setSearchYear={setSearchYear} />
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
		</div>
		<div className="row">
		<MovieListHeading heading="Movies" />
			<Movielist 
				movies={movies} 
				handleWatchedClick={addWatchedMovie}
				watchedComponent={[AddWatched, RemoveWatched]} />
		</div>

		<div className="row">
		<MovieListHeading heading="Already Watched" />
			<Movielist 
				movies={watched} 
				handleWatchedClick={removeWatchedMovie}
				watchedComponent={[AddWatched, RemoveWatched]} />
		</div>
	</div>
}

export default App;
