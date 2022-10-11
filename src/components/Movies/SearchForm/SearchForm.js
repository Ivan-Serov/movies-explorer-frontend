import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
function SearchForm({
    onSubmit,
    searchKeyword,
    onCheckbox,
    checked,
    checkedSaveMovies,
  }) {
    const [errorText, setErrorText] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      if (searchKeyword && location.pathname === '/movies') {
        setKeyword(searchKeyword);
      }
    }, []);
  
    const handleChange = (evt) => {
      setKeyword(evt.target.value);
      setIsFormValid(evt.target.closest('form').checkValidity());
    };
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      /* setIsFormValid(evt.target.closest('form').checkValidity());
      if (!isFormValid) {
        return setErrorText('Нужно ввести ключевое слово');
      } */
      onSubmit(keyword);
    };
    return (
        <section className='search'>
            <div className='search__container'>
                <form action='#' className='search__form' noValidate onSubmit={handleSubmit}>
                    <div className='search__lupa'></div>
                    <input type='text' className='search__input' placeholder='Фильм'
                    required
                    onChange={handleChange}
                    value={keyword}
                    minLength='1'
                    maxLength='30' />
                    <button type='submit' className='search__button'></button>
                </form>
                <FilterCheckbox
                    onCheckbox={onCheckbox}
                    checked={checked}
                    checkedSaveMovies={checkedSaveMovies}
                />
            </div>
        </section>
    );
}

export default SearchForm;