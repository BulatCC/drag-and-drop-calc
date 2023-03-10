import { CSSProperties } from 'react';
import { Display } from '../../common/Dispaly/Display';
import { MathButtons } from '../MathButtons/MathButtons';
import { NumberButtons } from '../NumberButtons/NumberButtons';
import { ButtonBlue } from '../../common/ButtonBlue/ButtonBlue';

export const disabledStyle = {
    'opacity': '50%',
    'pointerEvents': 'none'
};

export const getConstructorData = (
    handleDragStart: (id: string) => void,
    handleDragOver: (id: string, isRightSide: boolean) => void,
    handleDbClick: (dbClick: boolean, id: string) => void
) => {
    return [{
        id: '1',
        isDisplay: true,
        isDragable: true,
        isRightSide: false,
        styleProp: {},
        component: (id: string, isDragable: boolean, isRightSide: boolean, styleProp: CSSProperties) => (
            <Display
                dragStart={handleDragStart}
                dbClick={handleDbClick}
                id={id}
                isDragable={isDragable}
                isRightSide={isRightSide}
                styleProp={styleProp}
            />
        )
    },
    {
        id: '2',
        isDragable: true,
        isRightSide: false,
        styleProp: {},
        component: (id: string, isDragable: boolean, isRightSide: boolean, styleProp: CSSProperties) => (
            <MathButtons
                dragStart={handleDragStart}
                dragOver={handleDragOver}
                dbClick={handleDbClick}
                id={id}
                isDragable={isDragable}
                isRightSide={isRightSide}
                styleProp={styleProp}
            />
        )
    },
    {
        id: '3',
        isDragable: true,
        isRightSide: false,
        styleProp: {},
        component: (id: string, isDragable: boolean, isRightSide: boolean, styleProp: CSSProperties) => (
            <NumberButtons
                dragStart={handleDragStart}
                dragOver={handleDragOver}
                dbClick={handleDbClick}
                id={id}
                isDragable={isDragable}
                isRightSide={isRightSide}
                styleProp={styleProp}
            />
        )
    },
    {
        id: '4',
        isDragable: true,
        isRightSide: false,
        styleProp: {},
        component: (id: string, isDragable: boolean, isRightSide: boolean, styleProp: CSSProperties) => (
            <ButtonBlue
                value='='
                dragStart={handleDragStart}
                dragOver={handleDragOver}
                dbClick={handleDbClick}
                id={id}
                isDragable={isDragable}
                isRightSide={isRightSide}
                styleProp={styleProp}
            />
        )
    }];
};
