import { FC, ReactNode } from "react";
import './Tooltip.css';

interface TooltipProps {
    children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({children}) => {
    return (
        <div className="tooltip">
            {children}
        </div>
    );
};

export default Tooltip;