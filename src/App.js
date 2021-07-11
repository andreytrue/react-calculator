import React, {Component} from 'react';
import './css/App.css';
import Button from './components/button/button';
import Input from './components/input/input';
import ClearButton from './components/clear-button/clear-button';
import { INPUT_MAX_LENGTH } from './components/const/const';
import { evaluate } from 'mathjs';

import { observer } from 'mobx-react';
import { action, makeObservable, observable } from 'mobx';

export const App = observer(class extends Component {
  input = '';
  result = '';

  constructor(props) {
    super(props);
    makeObservable(this, {
      input: observable,
      result: observable,
      addToInput: action,
      handleEqual: action,
      handlerPercent: action,
      handlerDelete: action,
      handlerClear: action,
    });

    this.input = this.props.initialInput ?? '';
    this.result = this.props.initialInput ?? '';
  }

  addToInput = value => {
    if (this.input.length < INPUT_MAX_LENGTH) {
      this.input = this.input + value;
    }
  };

  handleEqual = () => {
    this.result = evaluate(this.input);
    this.input = '';
  };

  handlerPercent = () => {
    this.result = this.input * 0.01;
    this.input = '';
  };

  handlerDelete = () => {
    this.input = '';
  };

  handlerClear = () => {
    this.input = '';
    this.result = '';
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.input} result={this.result}></Input>
          <div className="row">
            <ClearButton handleClear={() => this.handlerClear()}>AC</ClearButton>
            <Button handleClick={() => this.handlerPercent()}>%</Button>
            <Button handleClick={() => this.handlerDelete()}>DEL</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
          </div>
        </div>
      </div>
    )
  }
});

export default App;
