import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import './SavedMovies.css'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
function SavedMovies({
    movies,
    onSubmit,
    isLoading,
    isFailed,
    isNotFound,
    searchKeyword,
    onCheckbox,
    checked,
    checkedSaveMovies,
    savedMovies,
    onSave,
    onDelete,
    allSavedMovies,
}) {
    return (
        <main className = 'movies'>
            < Header>
                <HeaderMovies/>
            </Header>
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
                    checked={checked}
                    checkedSaveMovies={checkedSaveMovies}
                    movies={movies}
                    isNotFound={isNotFound}
                    isFailed={isFailed}
                    savedMovies={savedMovies}
                    onSave={onSave}
                    onDelete={onDelete}
                    allSavedMovies={allSavedMovies}
                  ></MoviesCardList>
                )}
            <Footer />
        </main>
    );
}
export default SavedMovies;