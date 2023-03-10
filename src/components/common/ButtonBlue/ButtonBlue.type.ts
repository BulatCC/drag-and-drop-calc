import { CSSProperties } from 'react';

export interface ButtonBlueProps {
    dragStart: (id: string) => void;
    dragOver: (id: string, isRightSide: boolean) => void;
    dbClick: (isRightSide: boolean, id: string) => void;
    value: string;
    isRightSide: boolean;
    isDragable?: boolean;
    id?: string;
    styleProp?: CSSProperties;
}
