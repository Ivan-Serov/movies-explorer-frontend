import './Portfolio.css';
import React, { useEffect, useState } from 'react';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import foto from '../../../images/text__COLOR_font-main.svg';
function Portfolio() {
    return (
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <ul className="portfolio__list">
                <li className="portfolio__list-item underline-pb20">
                    <a
                        className="portfolio__link link"
                        href="https://ivan-serov.github.io/russian-travel/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Статичный сайт
                    </a>
                    <a
                        className='portfolio__arrow'
                        href='https://Ivan-Serov.github.io/russian-travel'
                        target='_blank'
                        rel='noreferrer'
                    />
                </li>
                <li className="portfolio__list-item underline-pb20">
                    <a
                        className="portfolio__link link"
                        href="https://Ivan-Serov.github.io/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Адаптивный сайт
                    </a>
                    <a
                        className='portfolio__arrow'
                        href='https://Ivan-Serov.github.io/russian-travel'
                        target='_blank'
                        rel='noreferrer'
                    />
                </li>
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__link link"
                        href="https://Ivan-Serov.github.io/mesto/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Одностраничное приложение
                        
                    </a>
                    <a
                        className='portfolio__arrow'
                        href='https://Ivan-Serov.github.io/mesto/'
                        target='_blank'
                        rel='noreferrer'
                    />
                </li>
            </ul>
        </section>
    );
}
  
export default Portfolio;