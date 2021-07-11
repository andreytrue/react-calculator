import { makeObservable, observable, action } from "mobx";
import { INPUT_MAX_LENGTH } from '../components/const/const';
import { evaluate } from 'mathjs';

export function calculatorStoreFunction() {
  return makeObservable({
    input: '',
    result: '',
    addToInput(value) {
      if (this.input.length < INPUT_MAX_LENGTH) {
        this.input = this.input + value;
      }
    },
    handlerEqual() {
      this.result = evaluate(this.input);
      this.input = '';
    },
    handlerPercent() {
      this.result = this.input * 0.01;
      this.input = '';
    },
    handlerDelete() {
      this.input = '';
    },
    handlerClear() {
      this.input = '';
      this.result = '';
    },
  }, {
    input: observable,
    result: observable,
    addToInput: action.bound,
    handlerEqual: action.bound,
    handlerPercent: action.bound,
    handlerDelete: action.bound,
    handlerClear: action.bound,
  });
}
