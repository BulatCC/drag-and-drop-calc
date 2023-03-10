import { ButtonProps } from './Button.type';
import style from './Button.module.scss';

const Button = ({
    value,
    handleClick,
    classMod
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={`${style['button']} ${classMod ?? ''}`}
            type='button'
            onClick={() => handleClick(value)}
        >
            {value}
        </button>
    );
};

export { Button };
