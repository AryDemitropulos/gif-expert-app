import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  function onInputChange({ target }) {
    setInputValue(target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim().length) return;

    onNewCategory(inputValue);
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Nueva Categoria'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
