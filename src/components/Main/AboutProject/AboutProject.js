import './AboutProject.css';
import React, { useEffect, useState } from 'react';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function AboutProject(){
    return (
        <section className="aboutProject" id='about'>
            <h2 className="project__title">О проекте</h2>
            <ul className="project__about">
                <li className="project__about-box">
                    <h3 className="project__about-title">Дипломный проект включал 5 этапов</h3>
                    <p className="project__about-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.
                    </p>
                </li>
                <li className="project__about-box">
                    <h3 className="project__about-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="project__about-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
                        успешно защититься.
                    </p>
                </li>
            </ul>
            <div className="project__duration">
                <div className="project__duration-area">
                    <div className="project__duration-time project__color-backend">1 неделя</div>
                    <p className="project__duration-name color_text">Back-end</p>
                </div>
                <div className="project__duration-area">
                    <div className="project__duration-time project__color-frontend">4 недели</div>
                    <p className="project__duration-name color_text">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;