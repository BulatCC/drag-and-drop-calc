import { useState } from 'react';
import { ToggleButtonProps } from './ToggleButton.type';
import style from './ToggleButton.module.scss';

const ToggleButton = ({ data, handleClick }: ToggleButtonProps): JSX.Element => {
    const [toggleData, setToggleData] = useState(data);

    const clickHandler = (isRuntime: boolean, index: number) => {
        if (toggleData[index].isActive === true) return;

        const updateToggleData = toggleData.map((item, i) => {
            const activeBtn = index === i ? true : false;
            return {
                ...item,
                isActive: activeBtn
            };
        });

        setToggleData(updateToggleData);
        handleClick(isRuntime);
    };

    return (
        <div className={style['toggle-buttons']}>
            {toggleData.map(({ title, img, isActive, isRuntime }, i) => (
                <button
                    className={`${style['toggle-button_button']} ${isActive ? style['active'] : ''}`}
                    key={title + img}
                    type='button'
                    onClick={() => clickHandler(isRuntime, i)}
                >
                    <img className={style['toggle-buttons_img']} src={img} alt="eye" width='20' height='20' />
                    {title}
                </button>
            ))}
        </div>
    );
};

export { ToggleButton };
