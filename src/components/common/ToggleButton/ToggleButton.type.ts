export interface ToggleButtonProps {
    data: {
        title: string;
        img: string;
        isActive: boolean;
        isRuntime: boolean;
    }[];
    handleClick: (value: boolean) => void;
}
