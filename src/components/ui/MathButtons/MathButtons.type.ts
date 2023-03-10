import { CSSProperties } from 'react';

export interface MathButtonsProps {
    dragStart: (id: string) => void;
    dragOver: (id: string, isRightSide: boolean) => void;
    dbClick: (isRightSide: boolean, id: string) => void;
    isRightSide: boolean;
    isDragable?: boolean;
    styleProp?: CSSProperties;
    id?: string;
}
