import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CalcLayout } from '../../Layouts/CalcLayout/CalcLayout';
import { Wrapper } from '../../common/Wrapper/Wrapper';
import { ToggleConstructorButton } from '../ToggleConstructorButton/ToggleConstructorButton';
import { DragArea } from '../../ui/DragArea/DragArea';
import { disabledStyle } from './Constructor.data';
import { getConstructorData } from './Constructor.data';
import { swapArray, removeArrayIndex } from '../../../utils';
import { CalcState } from '../../../store/Store.type';

let firstShiftId = '';
let secondShiftId = '';

const Constructor = (): JSX.Element => {
    const handleDragStart = (id: string) => {
        firstShiftId = id;
        setDragedId(id);
    };

    const handleDragOver = (id: string, isRightSide: boolean) => {
        if (isRightSide) {
            secondShiftId = id;
        }
    };

    const handleDbClick = (isRightSide: boolean, id: string) => {
        if (runtimeStatus) {
            removeRightSideComponents(isRightSide, id);
            restoreLeftSideComponents(id);
        }
    };

    const handleDrop = () => {
        swapComponents();
        calcConstruct();
        setDragedId('');
    };

    const calcData = getConstructorData(handleDragStart, handleDragOver, handleDbClick);
    const [leftSideCalсData, setLeftSideCalсData] = useState(calcData);
    const [rightSideCalcData, setRightSideCalcData] = useState<typeof calcData>([]);
    const [dragedId, setDragedId] = useState('');
    const leftSideStateRef = useRef<typeof calcData>();
    const rightSideStateRef = useRef<typeof calcData>();
    rightSideStateRef.current = rightSideCalcData;
    leftSideStateRef.current = leftSideCalсData;
    const { runtimeStatus } = useSelector((state: CalcState) => state);
    

    useEffect(() => {
        let newStateRightSide;
        if (runtimeStatus) {
            newStateRightSide = [...rightSideCalcData.map((item) => ({ ...item, isDragable: false }))];
        } else if (!runtimeStatus) {
            newStateRightSide = [...rightSideCalcData.map((item) => {
                if (item.isDisplay) {
                    return { ...item, isDragable: false };
                }

                return { ...item, isDragable: true };
            })];        
        }
        
        setRightSideCalcData(newStateRightSide as typeof calcData);
    }, [runtimeStatus]);

    const removeRightSideComponents = (isRightSide: boolean, id: string): void => {
        if (isRightSide && rightSideStateRef.current) {
            const index = rightSideStateRef.current.findIndex(item => item.id === id);
            const newRightSideState = removeArrayIndex(rightSideStateRef.current, index);
            setRightSideCalcData(newRightSideState);
        }
    };

    const restoreLeftSideComponents = (id: string): void => {
        if (rightSideStateRef.current && leftSideStateRef.current) {
            const restoreId = rightSideStateRef.current.find(item => item.id === id)?.id;
            const restoreIndex = leftSideStateRef.current.findIndex(item => item.id === restoreId);

            const newStateLeftSide = {
                ...leftSideStateRef.current[restoreIndex],
                isDragable: true,
                styleProp: {}
            };

            const newLeftSideCalсData = [...leftSideStateRef.current];
            newLeftSideCalсData[restoreIndex] = newStateLeftSide;
            setLeftSideCalсData(newLeftSideCalсData);
        }
    };

    const calcConstruct = (): void => {
        const isExistOnRightSide = rightSideCalcData.some(({ id }) => id === dragedId);
        const droppedIndex = leftSideCalсData.findIndex(item => item.id === dragedId);

        if (!isExistOnRightSide) {
            const copyStateRightSide = [...rightSideCalcData];
            if (leftSideCalсData[droppedIndex]?.isDisplay) {
                copyStateRightSide.unshift(leftSideCalсData[droppedIndex]);
                copyStateRightSide[0].isDragable = false;
            } else {
                copyStateRightSide.push(leftSideCalсData[droppedIndex]);
            };

            const newStateRightSide = [...copyStateRightSide.map((item) => ({ ...item, isRightSide: true }))];
            setRightSideCalcData(newStateRightSide);
        }

        const newStateLeftSide = {
            ...leftSideCalсData[droppedIndex],
            isDragable: false,
            styleProp: disabledStyle
        };

        leftSideCalсData[droppedIndex] = newStateLeftSide;
        setLeftSideCalсData(leftSideCalсData);
    };

    const swapComponents = (): void => {
        if (rightSideCalcData.length > 1) {
            const firstDragedIndex = rightSideCalcData.findIndex(item => item.id === firstShiftId);
            const secondDragedIndex = rightSideCalcData.findIndex(item => item.id === secondShiftId);
            const shiftedData = swapArray([...rightSideCalcData], firstDragedIndex, secondDragedIndex);
            setRightSideCalcData(shiftedData);
        }
    };

    const renderCalc = (data: typeof calcData | []): JSX.Element[] | undefined => {
        if (data.length === 0) return;

        return data.map(({ id, component, isDragable, styleProp, isRightSide }) => (
            <Wrapper key={id}>
                {component(id, isDragable, isRightSide, styleProp)}
            </Wrapper>
        ));
    };

    return (
        <CalcLayout>
            <div></div>
            <div>
                <ToggleConstructorButton />
            </div>
            <div>
                {!runtimeStatus && renderCalc(leftSideCalсData)}
            </div>
            <DragArea onDrop={handleDrop}>
                {rightSideCalcData && renderCalc(rightSideCalcData)}
            </DragArea>
        </CalcLayout>
    );
};

export { Constructor };
