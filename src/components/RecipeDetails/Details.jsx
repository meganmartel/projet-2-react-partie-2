import React from 'react'

const Details = ({details}) => {

  const infos = [];

  for (let i = 1; i <=30; i++) {
    const ingredient = details[`strIngredient${i}`];
    const measure = details[`strMeasure${i}`];

    if (ingredient && ingredient !== '' && measure && measure !== '') {
        infos.push({ingredient, measure});
      }
  }

  return (
    <ul>
      {infos.map((item, i) => (
        <li key={i}>
          <span>{item.measure}</span>
          <span>{item.ingredient}</span>
        </li>
      ))}
    </ul>
  );
}

export default Details