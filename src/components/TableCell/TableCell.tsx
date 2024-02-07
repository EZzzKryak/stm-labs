import { FC, useState } from "react";
import './TableCell.css';
import Tooltip from "../Tooltip/Tooltip";

interface TableCellProps {
    userInfo: string;
    img?: boolean;
    imgLink?: string;
}

const TableCell: FC<TableCellProps> = ({ userInfo, img, imgLink }) => {
    const [tooltipIsOpen, setTooltipIsOpen] = useState<boolean>(false);

    const handleOnMouseEnter = () => {
        setTooltipIsOpen(true);
        
    }
    const handleOnMouseLeave = () => {
        setTooltipIsOpen(false);
    }

    return (
        <>
            <td className="table__cell">
                {/* Флаг img идентифицирует ячейку с фото,
                Если он приходит, то отрисовывается фото с её тултипом при ховере,
                Иначе отрисовывается просто инфа о юзере */}
                {img ? (
                    <div className="table__cell-img-wrapper">
                        <img
                            alt="Фото пользователя"
                            src={userInfo}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                        />
                        {tooltipIsOpen &&
                        <Tooltip>
                            {<img src={imgLink} alt="Фотка" className="tooltip-img"/>}
                        </Tooltip>}
                    </div>
                ) : userInfo}
            </td>
        </>
    );
};

export default TableCell;