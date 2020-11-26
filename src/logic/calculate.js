/* eslint-disable no-param-reassign */
import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operators = ['+', '-', '÷', 'X', '%'];

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === '%') {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (operators.includes(buttonName)) {
    operate(total, next, operation);
  } else if ((buttonName === '=') && (next && total)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  }
  return { total, next, operation };
};

export default calculate;