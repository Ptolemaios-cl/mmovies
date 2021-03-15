import React from 'react';
import AddWatched from './AddWatched';
import RemoveWatched from './RemoveWatched';

const MovieList = (props) => {
    const base_url_path = "http://image.tmdb.org/t/p/w300";
    const watchedComponent = props.watchedComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="col-md-4 col-sm-6 col-xs-12 xs-mb50">
                    <div className="movie-box justify-content-start m-3">
                        <div className="image-container">
                            <img src={base_url_path + movie.poster_path} alt="movie"></img>
                        </div>
                        <div className="content-container">
                            <div className="inner">
                                <div onClick={() => props.handleWatchedClick(movie)}>
                                    <AddWatched />
                                </div>
                                <h2 className="title">{movie.title}</h2>
                                <p>{movie.overview.slice(0, 100)}...</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList;