import { useContext } from 'react';
import { PersonContext } from '../context/PersonContext';

export const Children = () => {
  const person = useContext(PersonContext);

  return (
    <>
      <h2>Children</h2>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </>
  );
};
