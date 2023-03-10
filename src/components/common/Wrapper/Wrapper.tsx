import { WrapperProps } from "./Wrapper.type";
import style from './Wrapper.module.scss';

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
        <div className={style['wrapper']}>
            {children}
        </div>
    )
}

export { Wrapper };
