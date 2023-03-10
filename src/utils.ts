import { mathOperators } from "./consts";

export const swapArray = <T>(arr:T[], a: number, b: number): T[] => {
    arr[a] = arr.splice(b, 1, arr[a])[0];
    return arr;
};

export const removeArrayIndex = <T>(arr: T[], index: number): T[] => {
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1, arr.length)
    ];
};

export const setDisplayValue = (expressionNum: string, value: string) => {
    let displayValue = expressionNum;

    if (expressionNum === '0' && value === ',') {
        displayValue = '0';
    }

    if (displayValue === '0' && value !== ',') {
        displayValue = '';
    }

    return displayValue;
};

export const mathCount = (firstValue: string, secondValue: string, mathOperator: string): string => {
    const firstNum = +firstValue.replace(',', '.');
    const secondnum = +secondValue.replace(',', '.');
    let result;
    switch (mathOperator) {
        case mathOperators.divide: {
            result = firstNum / secondnum;
            break;
        }
        case mathOperators.minus: {
            result = firstNum - secondnum;
            break;
        }
        case mathOperators.multiplication: {
            result = firstNum * secondnum;
            break;
        }
        case mathOperators.plus: {
            result = firstNum + secondnum;
            break;
        }
        default:
            result = '';
    }

    if (isFinite(+result)) {
       return result.toString().replace('.', ',').slice(0, 16);
    } 
     
    return 'Не определено';
};
