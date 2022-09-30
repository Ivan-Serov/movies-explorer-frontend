import './Techs.css';
import React, { useEffect, useState } from 'react';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function Techs(){
    return (
        <section className="techs" id='techs'>
               <h2 className="techs__header">Технологии</h2>
                <div className="techs__info">
                <h3 className="techs__title">7 технологий</h3>
                <p className="tech__text">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
            </div>
            <ul className="techs__list text">
                <li className="techs__list-item color_secondary">HTML</li>
                <li className="techs__list-item color_secondary">CSS</li>
                <li className="techs__list-item color_secondary">JS</li>
                <li className="techs__list-item color_secondary">React</li>
                <li className="techs__list-item color_secondary">Git</li>
                <li className="techs__list-item color_secondary">Express.js</li>
                <li className="techs__list-item color_secondary">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;