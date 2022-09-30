import './AboutMe.css';
import React, { useEffect, useState } from 'react';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import foto from '../../../images/pic__COLOR_pic.png';
function AboutMe(){
    return (
        <section className="about" id='student'>
            <h2 className="about__header">Студент</h2>
            <div className="about__info">
                <div className="about__info-container">
                    <h3 className="about__info-title">Иван</h3>
                    <p className="about__info-subtitle">Тестировщик, 27</p>
                    <p className="about__info-description">
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы. 
                    </p>
                    <ul className="about__links">
                        <li>
                              <a href="https://vk.com/" className="about__link" target="_blank" rel="noreferrer">
                                    ВКонтакте
                              </a>
                        </li>
                        <li>
                              <a href="https://github.com/Ivan-Serov" className="about__link" target="_blank" rel="noreferrer">
                                    Github
                              </a>
                        </li>
                    </ul>
                </div>
                <img className="about__info-image" src={foto} alt="Фотография студента" />
            </div>
        </section>
    );
}

export default AboutMe;