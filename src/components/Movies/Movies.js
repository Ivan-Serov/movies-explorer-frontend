import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from './Preloader/Preloader';
function Movies({
    onSubmit,
    movies,
    isLoading,
    isFailed,
    isNotFound,
    searchKeyword,
    savedMovies,
    onSave,
    onDelete,
    onCheckbox,
    checked,
    checkedSaveMovies,
    allSavedMovies,
  }) {
    return (
        <>
            < Header>
                <HeaderMovies/>
            </Header>
            <main className = 'movies'>
                <SearchForm 
                    onSubmit={onSubmit}
                    searchKeyword={searchKeyword}
                    onCheckbox={onCheckbox}
                    checked={checked}
                    checkedSaveMovies={checkedSaveMovies}
                />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        movies={movies}
                        isNotFound={isNotFound}
                        isFailed={isFailed}
                        searchKeyword={searchKeyword}
                        savedMovies={savedMovies}
                        onSave={onSave}
                        onDelete={onDelete}
                        onCheckbox={onCheckbox}
                        checked={checked}
                        checkedSaveMovies={checkedSaveMovies}
                        allSavedMovies={allSavedMovies}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}
export default Movies;