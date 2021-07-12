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
          <ClearButton onClick={() => store.handleOnClear()}>AC</ClearButton>
          <Button onClick={() => store.handleOnPercent()}>%</Button>
          <Button onClick={() => store.handleOnDelete()}>DEL</Button>
          <Button onClick={store.addToInput}>÷</Button>
        </div>
        <div className="row">
          <Button onClick={store.addToInput}>7</Button>
          <Button onClick={store.addToInput}>8</Button>
          <Button onClick={store.addToInput}>9</Button>
          <Button onClick={store.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button onClick={store.addToInput}>4</Button>
          <Button onClick={store.addToInput}>5</Button>
          <Button onClick={store.addToInput}>6</Button>
          <Button onClick={store.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button onClick={store.addToInput}>1</Button>
          <Button onClick={store.addToInput}>2</Button>
          <Button onClick={store.addToInput}>3</Button>
          <Button onClick={store.addToInput}>-</Button>
        </div>
        <div className="row">
          <Button onClick={store.addToInput}>.</Button>
          <Button onClick={store.addToInput}>0</Button>
          <Button onClick={() => store.handleOnEqual()}>=</Button>
        </div>
      </div>
    </div>
  )
});

export default App;
