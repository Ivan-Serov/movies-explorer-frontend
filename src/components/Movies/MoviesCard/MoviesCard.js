import './MoviesCard.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
function MoviesCard({ name, duration, thumbnail, type }) {
    let hours = Math.floor(duration / 60);
    let minutes = Math.floor(duration - hours * 60);
    let buttonClassName = `movies-card__button ${
      type === 'save' ? 'movies-card__button_delete' : ''
    }`;

    function handleClickSave(e) {
        const button = e.target;
        if (button.classList.contains("movies-card__button_save")) {
          button.classList.remove("movies-card__button_save");
        } else {
          button.classList.add("movies-card__button_save");
        }
    }
  
    return (
        <li className='movie-card__item'>
            <div className='movie-card__block'>
                <div className='movie-card__description'>
                    <h3 className='movie-card__title'>{name}</h3>
                    <div className='movie-card__time'>
                        {hours}ч {minutes}м
                    </div>
                </div>
                <button className={buttonClassName} type='button' onClick={handleClickSave}></button>
            </div>
            <img src={thumbnail} alt={name} className='movie-card__image' />

        </li>
    );
  }
  
  export default MoviesCard;