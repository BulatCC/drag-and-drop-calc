import { CalcLayoutProps } from './CalcLayout.type';
import style from './CalcLayout.module.scss';

const CalcLayout = ({ children }: CalcLayoutProps): JSX.Element => {
    return (
        <div className={style['calc-layout']}>
            {children}
        </div>
    )
};

export { CalcLayout };
