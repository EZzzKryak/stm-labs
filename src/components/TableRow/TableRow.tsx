import './TableRow.css';
import { User } from '../../types/User';
import TableCell from '../TableCell/TableCell';
import { formatDate } from '../../utils/formatDate';
import { FC } from 'react';

interface TableRowProps {
    user: User;
}

const TableRow: FC<TableRowProps> = ({user}) => {
    return (
        <tr className='table__row'>
            <TableCell userInfo={`${user.name.first} ${user.name.last}`}/>
            <TableCell img={true} userInfo={user.picture.thumbnail} imgLink={user.picture.large}/>
            <TableCell userInfo={`${user.location.state}, ${user.location.city}`}/>
            <TableCell userInfo={user.email}/>
            <TableCell userInfo={user.phone}/>
            <TableCell userInfo={formatDate(user.registered.date)}/>
        </tr>
    );
};

export default TableRow;