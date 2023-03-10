import { useSelector } from 'react-redux';
import { DisplayProps } from './Display.type';
import style from './Display.module.scss';
import { CalcState } from '../../../store/Store.type';

const Display = ({
    isDragable = true,
    isRightSide,
    dbClick,
    styleProp,
    id,
    dragStart
}: DisplayProps): JSX.Element => {
    const {
        firstExpressionValue,
        secondExpressionValue,
        mathOperator
    } = useSelector((state: CalcState) => state);

    let displayValue = firstExpressionValue;

    if (mathOperator && !secondExpressionValue) {
        displayValue = firstExpressionValue;
    }

    if (mathOperator && secondExpressionValue) {
        displayValue = secondExpressionValue;
    }

    const isTooLong = displayValue.length > 9 ? true: false;

    return (
        <div
            className={`${style['display']} ${isTooLong ? style['display--small-font'] : ''}`}
            style={styleProp}
            draggable={isDragable}
            onDragStart={() => dragStart(id as string)}
            onDoubleClick={() => dbClick(isRightSide, id as string)}
        >
            <span className={style['display_number']}>{displayValue}</span>
        </div>
    );
};

export { Display };
