import '../Promo/Promo.css';
import './NavTab.css';
import React, { useEffect, useState } from 'react';
const NavTab = ({ handleButtonClick }) => {
    return (
        <nav className="navigation">
            <ul className="promo__list">
                <li
                  name="aboutProject"
                  className="promo__list-item"
                  onClick={handleButtonClick}
                >
                    <a className="promo__link-text" href='#about'>О проекте</a>
                </li>
                <li
                  name="techs"
                  className="promo__list-item"
                  onClick={handleButtonClick}
                >
                    <a className="promo__link-text" href='#techs'>Технологии</a>
                </li>
                <li
                  name="student"
                  className="promo__list-item"
                  onClick={handleButtonClick}
                >
                    <a className="promo__link-text" href='#student'>Студент</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavTab;
  