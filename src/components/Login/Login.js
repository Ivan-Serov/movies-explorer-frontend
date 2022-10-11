import './Login.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/formValidation';

function Login({ onLogin, isLoginMessage, isErrorLoginBtn }) {
  const controlInput = useFormWithValidation();
  const { email, password } = controlInput.errors;
  const errorClassName = !controlInput.isValid
    ? 'login__error login__error_visible'
    : 'login__error';

  const errorClassNameBtn = isErrorLoginBtn
    ? 'login__error login__error_visible'
    : 'login__error';

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = controlInput.values;
    onLogin(email, password);
    controlInput.resetForm();
  };
  const name1 = controlInput.values.name ? controlInput.values.name : '';
    const email1 = controlInput.values.email ? controlInput.values.email : '';
    const password1 = controlInput.values.password ? controlInput.values.password : '';
  
    return (
        <main className='login'>
          <div className='login__container'>
            <header className='login__header'>
              <Link to='/' className='login__logo'></Link>
  
              <h2 className='login__title'>Рады видеть!</h2>
            </header>
            <form action='#' className='login__form' onSubmit={handleSubmit} noValidate>
              <fieldset className='login__content'>
                <label className='login__form-field'>
                  <span className='login__label'>E-mail</span>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    autoComplete='off'
                    className='login__input'
                    pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                    minLength='5'
                    maxLength='40'
                    onChange={controlInput.handleChange}
                    value={email1}
                    required
                  />
                </label>
                <label className='login__form-field'>
                  <span className='login__label'>Пароль</span>
                  <input
                    type='password'
                    name='password'
                    placeholder='Пароль'
                    autoComplete='off'
                    className='login__input login__input_color_red'
                    minLength='5'
                    maxLength='40'
                    onChange={controlInput.handleChange}
                    value={password1}
                    required
                  />
                </label>
                <button type='submit' className='login__submit-button' disabled={!controlInput.isValid}>
                  Войти
                </button>
              </fieldset>
            </form>
            <section className='question'>
              <p className='question__text'>Еще не зарегистрированы?</p>
              <Link to='/sign-up' className='question__login'>
                Регистрация
              </Link>
            </section>
          </div>
        </main>
    );
  }
  
  export default Login;