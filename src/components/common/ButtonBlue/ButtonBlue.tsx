import { useSelector, useDispatch } from 'react-redux';
import { ButtonBlueProps } from './ButtonBlue.type';
import style from './ButtonBlue.module.scss';
import { CalcState } from '../../../store/Store.type';
import { actionCreator } from '../../../store/Actions';
import { mathCount } from '../../../utils';

const ButtonBlue = ({
    value,
    isDragable = true,
    isRightSide,
    dragStart,
    dragOver,
    dbClick,
    id,
    styleProp
}: ButtonBlueProps): JSX.Element => {
    const dispatch = useDispatch();
    const {
        firstExpressionValue,
        secondExpressionValue,
        mathOperator
    } = useSelector((state: CalcState) => state);

    const handleClick = () => {
        if (firstExpressionValue && secondExpressionValue && mathOperator) {
            const displayValue = mathCount(firstExpressionValue, secondExpressionValue, mathOperator);
            dispatch(actionCreator.SetsecondExpressionValue(''));
            dispatch(actionCreator.SetMathOperator(''));
            dispatch(actionCreator.SetfirstExpressionValue(displayValue));
        }
    };

    return (
        <button
            className={style['ButtonBlue']}
            type='button'
            draggable={isDragable}
            onDragStart={() => dragStart(id as string)}
            onDragOver={() => dragOver(id as string, isRightSide)}
            onDoubleClick={() => dbClick(isRightSide, id as string)}
            onClick={handleClick}
            style={styleProp}
        >
            {value}
        </button>
    );
};

export { ButtonBlue };
