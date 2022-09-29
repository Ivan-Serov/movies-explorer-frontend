import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
function Movies(){
    return (
        <div className = 'movies'>
            < Header>
                <HeaderMovies/>
            </Header>
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    );
}
export default Movies;