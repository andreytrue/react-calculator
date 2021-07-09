import React, {Component} from 'react';
import './css/App.css';
import Button from './components/button/button';
import Input from './components/input/input';
import ClearButton from './components/clear-button/clear-button';
import { evaluate } from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      result: ''
    };
  }

  addToInput = value => {
      this.setState({ input: this.state.input + value });
  };

  handleEqual = () => {
    this.setState({ input: '', result: evaluate(this.state.input) });
  };

  handlerPercent = () => {
    this.setState({ input: '', result:  this.state.input * 0.01 });
  };

  handlerDelete = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} result={this.state.result}></Input>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: '', result: ''})}>AC</ClearButton>
            <Button handleClick={() => this.handlerPercent()}>%</Button>
            <Button handleClick={() => this.handlerDelete()}>DEL</Button>
            <Button handleClick={this.addToInput}>÷</Button>
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
}

export default App;
