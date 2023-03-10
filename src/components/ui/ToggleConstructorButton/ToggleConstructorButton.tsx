import { useDispatch } from 'react-redux';
import { ToggleButton } from '../../common/ToggleButton/ToggleButton';
import { toggleConstrucorButtonData } from './ToggleConstructorButton.data';
import { actionCreator } from '../../../store/Actions';

const ToggleConstructorButton = () => {
    const dispatch = useDispatch();

    const handleClick = (isRuntime: boolean) => {
        dispatch(actionCreator.ChangeRuntimeStatus(isRuntime));
    };

    return (
        <ToggleButton data={toggleConstrucorButtonData} handleClick={handleClick} />
    )
};

export { ToggleConstructorButton };
