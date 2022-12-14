import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BREAKPOINT_1280 = 1280;
const BREAKPOINT_990 = 990;
const BREAKPOINT_736= 736;
const BREAKPOINT_480 = 480;

const VISIBLE_MOVIES_5 = 5;
const VISIBLE_MOVIES_8 = 8;
const VISIBLE_MOVIES_12 = 12;
const VISIBLE_MOVIES_16 = 16;

const MOVIES_TO_LOAD_2 = 1;
const MOVIES_TO_LOAD_3 = 2;
const MOVIES_TO_LOAD_4 = 3;
function MoviesCardList({
  movies,
  isNotFound,
  isFailed,
  savedMovies,
  onSave,
  onDelete,
  checked,
  checkedSaveMovies,
  allSavedMovies,
}) {
  const [moviesToLoad, setMoviesToLoad] = useState(0);
  const [displayedMovies, setDisplayedMovies] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  console.log(movies);
  const handleShowMoreMovies = () => {
    setDisplayedMovies((movies) => movies + moviesToLoad);
  };
  //const searchShortMoviesArr = movies.slice(0);
  const searchShortMovies = (movies) => {
    console.log('HZ');
    console.log(searchShortMoviesArr);
    const searchShortMoviesArr = movies.slice(0);
    return searchShortMoviesArr.filter((item) => item.duration <= 40);
  };
   
  let saveMoviesFilterArr = !checkedSaveMovies
    ? searchShortMovies(savedMovies)
    : savedMovies;
  console.log("SAVE"+saveMoviesFilterArr);
  console.log(saveMoviesFilterArr);
  console.log(savedMovies);
  
  let moviesFilterArr = !checked ? searchShortMovies(movies) : movies;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (location.pathname === '/movies') {
      if (windowWidth <= BREAKPOINT_480) {
        setDisplayedMovies(VISIBLE_MOVIES_5);
        setMoviesToLoad(MOVIES_TO_LOAD_2);
      } else if (
        windowWidth <= BREAKPOINT_736 &&
        windowWidth > BREAKPOINT_480
      ) {
        setDisplayedMovies(VISIBLE_MOVIES_8);
        setMoviesToLoad(MOVIES_TO_LOAD_2);
      } else if (
        windowWidth <= BREAKPOINT_990 &&
        windowWidth > BREAKPOINT_736
      ) {
        setDisplayedMovies(VISIBLE_MOVIES_8);
        setMoviesToLoad(MOVIES_TO_LOAD_3);
      } else if (
        windowWidth < BREAKPOINT_1280 &&
        windowWidth > BREAKPOINT_990
      ) {
        setDisplayedMovies(VISIBLE_MOVIES_12);
        setMoviesToLoad(MOVIES_TO_LOAD_3);
      } else if (windowWidth >= BREAKPOINT_1280) {
        setDisplayedMovies(VISIBLE_MOVIES_12);
        setMoviesToLoad(MOVIES_TO_LOAD_4);
      }
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth, location]);

  let classTextError =
    isFailed && !isNotFound
      ? 'movies-list__error_visible'
      : 'movies-list__error';

  let buttonStatus =
    !(movies.length > 4) ||
    displayedMovies >= movies.length ||
    displayedMovies >= moviesFilterArr.length
      ? 'movies-list__button_hidden'
      : 'movies-list__button';

  let classTextNotFound =
    isNotFound && moviesFilterArr.length === 0
      ? 'movies-list__not-found_visible'
      : 'movies-list__not-found';

  let moviesBlock = location.pathname === '/movies';

  return (
    <section className='movies-list'>
        {moviesBlock ? (
        <>
          <ul className='movies-list__container'>
            {moviesFilterArr.slice(0, displayedMovies).map((movie) => {
              return (
                <MoviesCard
                key={movie.id}
                name={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
                movie={movie}
                allSavedMovies={allSavedMovies}
                />
              );
            })}
            <h2 className={classTextNotFound}>
              {moviesFilterArr.length === 0 ? '???????????? ???? ??????????????' : ''}
            </h2>
            
          
          </ul>
          <button type='button'
                className={buttonStatus}
                onClick={handleShowMoreMovies} >
            ??????
          </button>
        </>
        ) : (
          <ul className='movies-list__container'>
          {saveMoviesFilterArr.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                name={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                thumbnail={movie.thumbnail}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
                movie={movie}
                allSavedMovies={allSavedMovies}
              />
            );
          })}
          <h2 className={classTextNotFound}>
            {savedMovies.length === 0 ? '???????????? ???? ??????????????' : ''}
          </h2>
          
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
