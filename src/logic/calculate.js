import operate from './operate';

function isNumber(item, modeSwitch) {
  const RomaniaDigit = ['I', 'V', 'X', 'L' ,'C', 'D', 'M'];
  return modeSwitch ? RomaniaDigit.indexOf(item) >= 0 : !!item.match(/[0-9]+/) ;
}

function deleteOneDigit(digit){
  if(digit.length > 1){
    return digit.substring(0, digit.length - 1);
  }
  else{
    return '0';
  }
}

export default function calculate(obj, buttonName, modeSwitch) {
  if (buttonName === 'back') {
    if(obj.next){
      return {next: deleteOneDigit(obj.next)};
    }
    else{
      return {next: null};
    }
  }
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName, modeSwitch)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    if (obj.next === '0'){
      return { next: buttonName };
    }
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation, modeSwitch),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (!obj.next && !obj.total) {
    return {};
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation, modeSwitch),
      next: null,
      operation: buttonName,
    };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
