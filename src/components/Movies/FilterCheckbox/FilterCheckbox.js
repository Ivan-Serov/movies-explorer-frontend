import './FilterCheckbox.css';
import React, { useEffect, useState } from 'react';
import smalltumb from '../../../images/smalltumb-on.png'; 

function FilterCheckbox() {

  return (
    <div className="filterCheckbox">
      <img src={smalltumb} alt="Тумблер" className="filterCheckbox__tumbler"/>
      <p className="filterCheckbox__title">{'Короткометражки'}</p>
    </div>
  );
}

export default FilterCheckbox;
