import { Link, NavLink } from 'react-router-dom';
import './HeaderMovies.css';
import React, { useEffect, useState } from 'react';
import Burger from '../Burger/Burger';


function HeaderMovies() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState('');
    const handleBurgerMenuOpenClick = () => setIsBurgerMenuOpen('open');
    const handleBurgerMenuCloseClick = () => setIsBurgerMenuOpen('');
 
    return (
        <>
            <nav className='navigate'>
                {/* <Link to='/' className='auth-links__logo'></Link> */}
                <ul className='navigate__list'>
                    <li className='navigate__item'>
                        <NavLink to='/movies' className='navigate__movies' /* onClick="refresh()" */>
                            Фильмы
                        </NavLink>
                    </li>
                    <li className='navigate__item'>
                        <NavLink to='/saved-movies' className='navigate__movies'>
                        Сохранённые фильмы
                        </NavLink>
                    </li>
                </ul>
                    <Link to='/profile' className='navigate__account' /* onClick="refresh()" */>
                        Аккаунт
                    </Link>
            </nav>
            <button
                className='navigate__button-open'
                onClick={handleBurgerMenuOpenClick}>

            </button>
            <Burger
                isOpen={isBurgerMenuOpen}
                isClose={handleBurgerMenuCloseClick}>

            </Burger>
        </>
    );
}
export default HeaderMovies;