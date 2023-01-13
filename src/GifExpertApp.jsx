import { func } from 'prop-types';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  function onAddCategory(newCategory) {
    if (isStringInArrayStrict(newCategory, categories)) return;

    setCategories([newCategory, ...categories]);
  }

  function isStringInArrayStrict(element, array) {
    return array.some(
      (el) => el.toLocaleLowerCase() === element.toLocaleLowerCase()
    );
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category, index) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};
