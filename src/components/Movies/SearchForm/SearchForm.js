import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import React, { useEffect, useState } from 'react';
function SearchForm() {
    return (
        <section className='search'>
            <div className='search__container'>
                <form action='#' className='search__form'>
                    <div className='search__lupa'></div>
                    <input type='text' className='search__input' placeholder='Фильм' />
                    <button type='submit' className='search__button'></button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm;