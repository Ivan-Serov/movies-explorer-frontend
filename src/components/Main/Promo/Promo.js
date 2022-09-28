import './Promo.css';
import React, { useEffect, useState } from 'react';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function Promo({ children }){
    return (
        <div className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            {children}
        </div>
    );
}

export default Promo;