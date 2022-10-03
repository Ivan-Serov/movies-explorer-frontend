import './Main.css';
import React, { useEffect, useState } from 'react';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import NavTab from './NavTab/NavTab'
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
function Main(){
    return (
        <main className="main">
           <Header>
               < HeaderMain/>
            </Header>
            
            < Promo>
                < NavTab/>
            </Promo>
            < AboutProject/>
            < Techs/>
            < AboutMe/>
            < Portfolio/>
            < Footer/>
        </main>
    );
}

export default Main;