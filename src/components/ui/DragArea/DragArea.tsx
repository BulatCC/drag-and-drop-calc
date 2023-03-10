import { useState } from 'react';
import { DragAreaProps } from './DragArea.type';
import style from './DragArea.module.scss';
import eyeIcon from '../../../assets/img/svg/drag.svg';

const DragArea = ({ children, onDrop }: DragAreaProps): JSX.Element => {
    const [isDragEnter, setIsDragEnter] = useState(false);
    return (
        <div className={
            `${style['drag-area']} ${isDragEnter ? style['active'] : ''}`}
            onDragEnter={() => setIsDragEnter(true)}
            onDragLeave={() => setIsDragEnter(false)}
            onDragOver={(evt) => evt.preventDefault()}
            onDrop={() => {
                setIsDragEnter(false)
                onDrop()
            }}
        >
            {!children &&
                <div className={style['drag-area_wrapper']}>
                    <img className={style['drag-area_img']} src={eyeIcon} alt="перетащите сюда" width='20' height='20' />
                    <p className={style['drag-area_title']}>Перетащите сюда</p>
                    <p className={style['drag-area_text']}>любой элемент из левой панели</p>
                </div>}
            {children}
        </div>
    );
};

export { DragArea };
