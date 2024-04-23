import { createContext } from 'react';

const PersonContext = createContext();

const PersonProvider = ({ children }) => (
  <PersonContext.Provider value={{ name: 'Juan', age: 36 }}>
    {children}
  </PersonContext.Provider>
);

export { PersonContext, PersonProvider };
