import { createReducer } from '@reduxjs/toolkit';
import { actionCreator } from './Actions';
import { CalcState } from './Store.type';

export const calcState: CalcState = {
    runtimeStatus: false,
    firstExpressionValue: '0',
    secondExpressionValue: '',
    mathOperator: '',
};

const calcReducer = createReducer(calcState, (builder) => {
  builder
    .addCase(actionCreator.ChangeRuntimeStatus, (state, action) => {
      state.runtimeStatus = action.payload;
    })
    .addCase(actionCreator.SetfirstExpressionValue, (state, action) => {
      state.firstExpressionValue = action.payload;
    })
    .addCase(actionCreator.SetsecondExpressionValue, (state, action) => {
      state.secondExpressionValue = action.payload;
    })
    .addCase(actionCreator.SetMathOperator, (state, action) => {
      state.mathOperator = action.payload;
    })
});

export { calcReducer };
