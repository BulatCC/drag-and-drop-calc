import { useDispatch, useSelector } from 'react-redux';
import { NumberButtonsProps } from './NumberButtons.type';
import { Button } from '../../common/Button/Button';
import { numbers } from './NumberButtons.data';
import style from './NumberButtons.module.scss';
import { actionCreator } from '../../../store/Actions';
import { CalcState } from '../../../store/Store.type';
import { setDisplayValue } from '../../../utils';

const NumberButtons = ({
    isDragable = true,
    styleProp,
    id,
    isRightSide,
    dragStart,
    dragOver,
    dbClick
}: NumberButtonsProps): JSX.Element => {
    const dispatch = useDispatch();
    const {
        firstExpressionValue,
        secondExpressionValue,
        runtimeStatus,
        mathOperator
    } = useSelector((state: CalcState) => state);

    const handleClick = (value: string) => {
        if (!runtimeStatus) return

        if (!mathOperator) {
            const displayValue = setDisplayValue(firstExpressionValue, value);
            if (displayValue.length > 15) return;
            dispatch(actionCreator.SetfirstExpressionValue(`${displayValue}${value}`));
        } else {
            const displayValue = setDisplayValue(secondExpressionValue, value);
            if (displayValue.length > 15) return;
            dispatch(actionCreator.SetsecondExpressionValue(`${displayValue}${value}`));
        }
    };

    return (
        <div
            className={style['number-buttons']}
            style={styleProp}
            draggable={isDragable}
            onDragStart={() => dragStart(id as string)}
            onDragOver={() => dragOver(id as string, isRightSide as boolean)}
            onDoubleClick={() => dbClick(isRightSide, id as string)}
        >
            {numbers.map((item) => <Button value={item} key={item} handleClick={handleClick}
                classMod={item === '0' ? style['number-buttons_wide'] : ''} />)}
        </div>
    );
};

export { NumberButtons };
