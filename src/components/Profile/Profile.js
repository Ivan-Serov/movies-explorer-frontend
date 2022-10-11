import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import Header from '../Header/Header';

import React, { useState, useCallback, useEffect } from 'react';
import './Profile.css'
import * as auth from '../../utils/AuthApi';
import { useFormWithValidation } from '../../utils/formValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser, onSignOut, isMessageProfile, onRegister, isErrorRegisterBtn1, isRegisterMessage1}) {
    // Подписываемся на контекст CurrentUserContext
    const userData = React.useContext(CurrentUserContext);
    const controlInput = useFormWithValidation();
    const errorClassName = !controlInput.isValid
    ? 'register__error register__error_visible'
    : 'register__error';

  const errorClassNameBtn1 = isErrorRegisterBtn1
    ? 'register__error register__error_visible'
    : 'register__error';
    const [values, setValues] = useState({
      name: '',
      email: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [isOpenPopup, setIsOpenPopup] = React.useState(false);
    const [isEditInput, setIsEditInput] = useState(true);
    const toggleInput = (e) => {
      e.preventDefault();
      setIsEditInput((state) => !state);
    };
    //функция проверки валидности емайла
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /\S+@\S+\.\S+/
        );
    };
  
    // Обработчик изменения инпута обновляет стейт
    const handleChange = (e) => {
      const { name, value } = e.target;
      const target = e.target;
      if (value === userData.name || value === userData.email) {
        setValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        setErrors({...errors, [name]: 'Введенное значение совпадает с текущими данными' });
        setIsValid(false);
      } else {
        setValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
      }
      if (name === 'email' && !validateEmail(value)  &&  value !== "") {
        setErrors({...errors, [name]: target.validationMessage, 'email': 'Невалидный email' });
        setIsValid(false);
      }
    };
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
    );
  
  
    useEffect(() => {
      const initialValue = {
        name: userData.name,
        email: userData.email,
      }
      const initialErrors = {
        name: '',
        email: '',
      }
      resetForm(initialValue,initialErrors,false);
    }, [userData])
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email } = values;
      if (!name) {
        onUpdateUser(userData.name, email);
      } else if (!email) {
        onUpdateUser(name, userData.email);
      } else {
        onUpdateUser(name, email);
      }
      setTimeout(() => setIsEditInput((state) => !state), 1000);
      controlInput.resetForm()
    }
  console.log(userData);
  console.log(values.name);
  
    return (
        <main className = 'profile'>
            < Header>
                <HeaderMovies/>
            </Header>
                <div className='profile__container'>
                  <h1 className='profile__title'>Привет, {userData.name}!</h1>
                  <form className='profile__form' onSubmit={handleSubmit} noValidate>
                      <label className='profile__input-container'>
                          <span className='profile__input-label'>Имя</span>
                          <input
                            type='text'
                            className='profile__input'
                            name='name'
                            minLength='2'
                            maxLength='40'
                            required='true'
                            onChange={handleChange}
                            placeholder="123"
                            value={values.name}
                            {...(!isEditInput ? {} : { disabled: true })}
                          />
                      </label>
                      <label className='profile__input-container'>
                          <span className='profile__input-label'>E-mail</span>
                          <input
                            type='email'
                            className='profile__input'
                            name='email'
                            required='true'
                            placeholder="123"
                            pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                            onChange={handleChange}
                            value={values.email}
                            {...(!isEditInput ? {} : { disabled: true })}
                          />
                      </label>
                      {isEditInput ? (
                           <ul className='profile__list'>
                               <li className='profile__item'>
                                 <button type="button"  className='profile__edit' onClick={toggleInput} /* onClick={toggleInput} */>
                                   Редактировать
                                 </button>
                               </li>
                               <li className='profile__item'>
                                 <button className='profile__logout' onClick={onSignOut}>Выйти из аккаунта</button>
                               </li>
                           </ul>
                       ) : ( 
                         <>
                            <span className={errorClassNameBtn1}>{isRegisterMessage1}</span> 
                            <button
                             type='submit'
                             className='profile__button'

                             //disabled={!isValid}
                            >
                             Сохранить
                           </button> 
                          </>
                      )}
                  

                
               </form>
               
            </ div>
        </main>
    );
}
export default Profile;