import React, { useContext, useState } from 'react';
import Card from './../ui/Card';
import GlobalStateContext from './../../store/GlobalStateContext';
import classes from './Component.module.css';

function Component(props) {
  const [localState, setLocalState] = useState(0);
  const globalStateCtx = useContext(GlobalStateContext);

  function incrementLocalState() {
    setLocalState((oldValue) => {
      return oldValue + 1;
    });
  }

  function decrementLocalState() {
    setLocalState(localState - 1);
  }

  return (
    <Card>
      <h2>{props.title}</h2>

      <Card>
        <div className={classes.actions}>
          <button onClick={incrementLocalState}>+</button>
          <h3>Local State Variable: {localState}</h3>
          <button onClick={decrementLocalState}>-</button>
        </div>
      </Card>

      <Card>
        <div className={classes.actions}>
          <button onClick={globalStateCtx.incrementGlobalStateVariable}>
            +
          </button>
          <h3>Global State Variable: {globalStateCtx.globalStateVariable}</h3>
          <button onClick={globalStateCtx.decrementGlobalStateVariable}>
            -
          </button>
        </div>
      </Card>
    </Card>
  );
}

export default Component;
