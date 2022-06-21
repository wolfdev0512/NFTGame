import React, { useState, createContext } from 'react';

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [modal, setModal] = useState('');

  return (
    <Context.Provider value={[modal, setModal]}>
      {props.children}
    </Context.Provider>
  );
};
