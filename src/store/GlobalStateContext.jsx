import { createContext, useState } from 'react';

const GlobalStateContext = createContext({
  globalStateVariable: 0,
  setGlobalStateVariable: (value) => {},
  incrementGlobalStateVariable: (value) => {},
  decrementGlobalStateVariable: (value) => {},
});

export function GlobalStateContextProvider(props) {
  const [localValue, setLocalValue] = useState(0);

  function updateValue(newValue) {
    setLocalValue(newValue);
  }

  function incrementValue() {
    setVaule((oldValue) => {
      return oldValue + 1;
    });
  }

  function decrementValue() {
    setLocalValue((oldValue) => {
      return oldValue - 1;
    });
  }

  const context = {
    globalStateVariable: localValue,
    setGlobalStateVariable: updateValue,
    incrementGlobalStateVariable: incrementValue,
    decrementGlobalStateVariable: decrementValue,
  };

  return (
    <GlobalStateContext.Provider value={context}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateContext;
