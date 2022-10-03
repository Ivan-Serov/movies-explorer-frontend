import { Link } from 'react-router-dom';
import './HeaderMain.css';
import React, { useEffect, useState } from 'react';


function HeaderMain() {
    return (
        <nav className='auth-links'>
            {/* <Link to='/' className='auth-links__logo'></Link> */}
            <ul className='auth-links__list'>
                <li className='auth-links__item'>
                    <Link to='/signup' className='auth-links__registration'>
                      Регистрация
                    </Link>
                </li>
                <li className='auth-links__item'>
                    <Link to='/signin' className='auth-links__login'>
                      Войти
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default HeaderMain;