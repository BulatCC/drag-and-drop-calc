import { CSSProperties } from 'react';

export interface DisplayProps {
    dragStart: (id: string) => void;
    dbClick: (isRightSide: boolean, id: string) => void;
    isRightSide: boolean;
    isDragable?: boolean;
    styleProp?: CSSProperties;
    id?: string;
}
