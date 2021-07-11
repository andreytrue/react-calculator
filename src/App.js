import React from 'react';
import './css/App.css';
import Button from './components/button/button';
import Input from './components/input/input';
import ClearButton from './components/clear-button/clear-button';

import { observer } from 'mobx-react';

import { calculatorStoreFunction } from './store/calculatorStoreFunction';

const store = calculatorStoreFunction();

const App = observer(() => {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={store.input} result={store.result}></Input>
        <div className="row">
          <ClearButton handleClear={() => store.handlerClear()}>AC</ClearButton>
          <Button handleClick={() => store.handlerPercent()}>%</Button>
          <Button handleClick={() => store.handlerDelete()}>DEL</Button>
          <Button handleClick={store.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={store.addToInput}>7</Button>
          <Button handleClick={store.addToInput}>8</Button>
          <Button handleClick={store.addToInput}>9</Button>
          <Button handleClick={store.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={store.addToInput}>4</Button>
          <Button handleClick={store.addToInput}>5</Button>
          <Button handleClick={store.addToInput}>6</Button>
          <Button handleClick={store.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={store.addToInput}>1</Button>
          <Button handleClick={store.addToInput}>2</Button>
          <Button handleClick={store.addToInput}>3</Button>
          <Button handleClick={store.addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={store.addToInput}>.</Button>
          <Button handleClick={store.addToInput}>0</Button>
          <Button handleClick={() => store.handlerEqual()}>=</Button>
        </div>
      </div>
    </div>
  )
});

export default App;
