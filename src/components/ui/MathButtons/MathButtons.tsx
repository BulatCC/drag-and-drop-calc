import { useDispatch, useSelector } from 'react-redux';
import { MathButtonsProps } from './MathButtons.type';
import style from './MathButtons.module.scss';
import { Button } from '../../common/Button/Button';
import { operators } from './MathButtons.data';
import { actionCreator } from '../../../store/Actions';
import { CalcState } from '../../../store/Store.type';

const MathButtons = ({
    isDragable = true,
    isRightSide,
    styleProp,
    id,
    dragStart,
    dragOver,
    dbClick
}: MathButtonsProps): JSX.Element => {
    const { runtimeStatus } = useSelector((state: CalcState) => state);
    const dispatch = useDispatch();
    const handleClick = (value: string) => {
        if (runtimeStatus) {
            dispatch(actionCreator.SetMathOperator(value));
        }
    };

    return (
        <div
            className={style['math-buttons']}
            style={styleProp}
            draggable={isDragable}
            onDragStart={() => dragStart(id as string)}
            onDragOver={() => dragOver(id as string, isRightSide as boolean)}
            onDoubleClick={() => dbClick(isRightSide, id as string)}
        >
            {operators.map(item => <Button value={item} key={item} handleClick={handleClick} />)}
        </div>
    )
};

export { MathButtons };
