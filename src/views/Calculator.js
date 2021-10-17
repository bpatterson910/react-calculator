import { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import ArabianPanel from '../components/ArabianPanel';
import RomanianPanel from '../components/RomanianPanel';
import DisplayPanel from '../components/DisplayPanel';
import PreviewPanel from '../components/PreviewPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [modeSwitch, setModeSwitch] = useState(0);
  const [isShowOperation, setShowOperation] = useState(false);
  const initialObj = { total: null, next: null, operation: null };
  const [state, setState] = useState(initialObj);
  const [error, setError] = useState({ status: false });

  const updateState = (newState) => setState((actualState) => ({ ...actualState, ...newState }));

  const errorHandler = () => {
    setError({ status: true });
    setState({ total: 'Invalid operation: Can\'t Divide by Zero', next: null, operation: null });
  };

  const handleClick = (buttonName) => {
    if (error.status) {
      setError({ savedInput: buttonName });
      setState(initialObj);
      return;
    }
    let operations = ['*', '/', '+', '-'];
    operations.indexOf(buttonName) >=0 || ((state.next === null || state.next === '0') && buttonName === 'back' )? setShowOperation(true) : setShowOperation(false); //
    let output;
    try {
      
      output = calculate(state, buttonName, modeSwitch);
    } catch (err) {
      errorHandler();
    }
    updateState(output);
  };

  const onSwitchMode = () => {
    setModeSwitch(!modeSwitch);
    setState(initialObj)
  }

  useEffect(() => {
    if ('savedInput' in error) {
      setError({ status: false });

      const output = calculate(state, error.savedInput, modeSwitch);
      updateState(output);
    }
  }, [error]);

  return (
    <div>
      <div className="text-center flex justify-center mt-20">
        <div className="w-4/5 sm:w-1/2 lg:w-1/4 flex flex-col">
          <div className="flex flex-row py-3">            
            <Toggle
              checked = {modeSwitch}
              onChange = {() => onSwitchMode() }
            />
            <span className="pl-6">{ modeSwitch ? "Romanian " : "Arabian " } Mode</span>
          </div>
          <PreviewPanel
            total = {state.total}
            next ={state.next}
            operation = {state.operation}
            isShowOperation = {isShowOperation}
          />
          <DisplayPanel 
            total={state.total}
            next={state.next}
          />
        </div>
      </div>
      {modeSwitch ? 
        <RomanianPanel handleClick={handleClick} /> 
      : 
      <ArabianPanel handleClick={handleClick}/>
      }
    </div>
  );
};

export default Calculator;