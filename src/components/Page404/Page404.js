import './Page404.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Page404() {
    return (
        <div className='page404'>
          <div className='page404__container'>
            <h2 className='page404__title'>404</h2>
            <p className='page404__text'>Страница не найдена</p>
            <Link className='page404__link' to={-1}>
              Назад
            </Link>
          </div>
        </div>
    );
}
  
export default Page404;