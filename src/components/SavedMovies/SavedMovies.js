import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import './SavedMovies.css'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
function Movies(){
    return (
        <div className = 'movies'>
            < Header>
                <HeaderMovies/>
            </Header>
            <SearchForm />
            <MoviesCardList type='save' />
            <Footer />
        </div>
    );
}
export default Movies;