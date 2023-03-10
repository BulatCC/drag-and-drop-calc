import { createAction } from '@reduxjs/toolkit';

const ActionType = {
    ChangeRuntimeStatus: 'calc/ChangeRuntimeStatus',
    SetfirstExpressionValue: 'calc/SetfirstExpressionValue',
    SetsecondExpressionValue: 'calc/SetsecondExpressionValue',
    SetMathOperator: 'calc/SetMathOperator',
};

export const actionCreator = {
    ChangeRuntimeStatus: createAction(
        ActionType.ChangeRuntimeStatus,
        (runtimeStatus: boolean) => ({
            payload: runtimeStatus,
        }),
    ),
    SetfirstExpressionValue: createAction(
        ActionType.SetfirstExpressionValue,
        (firstExpressionValue: string) => ({
            payload: firstExpressionValue,
        }),
    ),
    SetsecondExpressionValue: createAction(
        ActionType.SetsecondExpressionValue,
        (SetsecondExpressionValue: string) => ({
            payload: SetsecondExpressionValue,
        }),
    ),
    SetMathOperator: createAction(
        ActionType.SetMathOperator,
        (mathOperator: string) => ({
            payload: mathOperator,
        }),
    )
};
