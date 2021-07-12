import { makeObservable, observable, action } from "mobx";
import { INPUT_MAX_LENGTH, DIVISION_SYMBOL } from '../components/const/const';
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
    handleOnEqual() {
      if (this.input.includes(DIVISION_SYMBOL.OBELUS)) {
        this.input =
          this.input.replaceAll(
            DIVISION_SYMBOL.OBELUS, 
            DIVISION_SYMBOL.SLASH
          );
      }

      this.result = evaluate(this.input);
      this.input = '';
    },
    handleOnPercent() {
      this.result = this.input * 0.01;
      this.input = '';
    },
    handleOnDelete() {
      this.input = '';
    },
    handleOnClear() {
      this.input = '';
      this.result = '';
    },
  }, {
    input: observable,
    result: observable,
    addToInput: action.bound,
    handleOnEqual: action.bound,
    handleOnPercent: action.bound,
    handleOnDelete: action.bound,
    handleOnClear: action.bound,
  });
}
