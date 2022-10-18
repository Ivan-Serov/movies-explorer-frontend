import './AboutMe.css';
import React, { useEffect, useState } from 'react';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import foto from '../../../images/ZZ.jpg';
function AboutMe(){
    let t = new Date().getFullYear()- 1995;
    console.log(t);
    console.log((new Date().toDateString()- 1995));
    return (
        <section className="about" id='student'>
            <h2 className="about__header">Студент</h2>
            <div className="about__info">
                <div className="about__info-container">
                    <h3 className="about__info-title">Иван</h3>
                    <p className="about__info-subtitle">Тестировщик, 27</p>
                    <p className="about__info-description">
                    Я живу в Москве. Зкаончил РТУ МИРЭА (бакалавриат: Мехотроника и робототехника; магистратура: Управление в технических системах)

                    </p>
                    <ul className="about__links">
                        <li>
                              <a href="https://vk.com/van9iserov" className="about__link" target="_blank" rel="noreferrer">
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