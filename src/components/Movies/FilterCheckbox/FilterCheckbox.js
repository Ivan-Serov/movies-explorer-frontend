import './FilterCheckbox.css';
import React, { useEffect, useState } from 'react';
import smalltumb from '../../../images/smalltumb-on.svg'; 
import { useLocation } from 'react-router-dom';

function FilterCheckbox({ onCheckbox, checked, checkedSaveMovies }) {
  const location = useLocation();
  const handleCheckbox = (evt) => {
    console.log(evt.target.checked);
    onCheckbox(evt.target.checked);
  };
  return (
    <div className="filterCheckbox">
      {location.pathname === '/movies' ? (
        <>
          <input
            type='checkbox'
            className='custom-checkbox'
            id='custom-checkbox'
            name='custom-checkbox'
            defaultValue='yes'
            checked={checked}
            onChange={handleCheckbox}
          />
          
        </>
      ) : (
        <input
          type='checkbox'
          className='custom-checkbox'
          id='custom-checkbox'
          name='custom-checkbox'
          defaultValue='yes'
          checked={checkedSaveMovies}
          onChange={handleCheckbox}
        />
      )}
      <label htmlFor='custom-checkbox'></label>
      {/* <img src={smalltumb} alt="Тумблер" className="filterCheckbox__tumbler"/> */}
      {/* <button  className={smalltumb} ></button> */}
      <p className="filterCheckbox__title">{'Короткометражки'}</p>
    </div>
  );
}

export default FilterCheckbox;
