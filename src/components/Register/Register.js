import './Register.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../utils/formValidation';

function Register({ onRegister, isErrorRegisterBtn, isRegisterMessage }) {
    const controlInput = useFormValidation();

    console.log(controlInput.values);

    const { name, email, password } = controlInput.errors;
    console.log(controlInput);
    const errorClassName = !controlInput.isValid
      ? 'register__error register__error_visible'
      : 'register__error';

    const errorClassNameBtn = isErrorRegisterBtn
      ? 'register__error register__error_visible'
      : 'register__error';

    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email, password } = controlInput.values;
      onRegister(name, email, password);
      controlInput.resetForm();
    };
    const name1 = controlInput.values.name ? controlInput.values.name : '';
    const email1 = controlInput.values.email ? controlInput.values.email : '';
    const password1 = controlInput.values.password ? controlInput.values.password : '';
    return (
        <main className='register'>
            <div className='register__container'>
                <header className='register__header'>
                  <Link to='/' className='register__logo'></Link>
                  <h2 className='register__title'>Добро пожаловать!</h2>
                </header>
                <form action='#' className='register__form' onSubmit={handleSubmit} noValidate>
                  <fieldset className='register__content'>
                    <label className='register__form-field'>
                      <span className='register__label'>Имя</span>
                      <input
                        type='text'
                        name='name'
                        placeholder='Виталий'
                        autoComplete='off'
                        className='register__input'
                        minLength='2'
                        maxLength='40'
                        pattern='[A-Za-zА-Яа-яЁё\s-]+'
                        onChange={controlInput.handleChange}
                        value={name1}
                        required="required"
                      />
                      <span className={errorClassName}>{name}</span>
                    </label>

                    <label className='register__form-field'>
                      <span className='register__label'>E-mail</span>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        autoComplete='off'
                        className='register__input'
                        minLength='5'
                        maxLength='40'
                        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                        onChange={controlInput.handleChange}
                        value={email1}
                        required
                        
                      />
                      <span className={errorClassName}>{email}</span>
                    </label>
                    <label className='register__form-field'>
                      <span className='register__label'>Пароль</span>
                      <input
                        type='password'
                        name='password'
                        placeholder='Пароль'
                        autoComplete='off'
                        className='register__input register__input_color_red'
                        minLength='5'
                        maxLength='40'
                        //pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                        onChange={controlInput.handleChange}
                        value={password1}
                        required
                      />
                      <span className={errorClassName}>{password}</span>
                    </label>
                    <span className={errorClassNameBtn}>{isRegisterMessage}</span>
                    <button type='submit' 
                      className='register__submit-button' 
                      disabled={!controlInput.isValid}>
                        Зарегистрироваться
                    </button>
                  </fieldset>
                </form>
                <section className='question'>
                  <p className='question__text'>Уже зарегистрированы?</p>
                  <Link to='/sign-in' className='question__login'>
                    Войти
                  </Link>
                </section>
            </div>
        </main>
    );
}
  
export default Register;