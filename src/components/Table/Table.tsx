import { FC, memo } from 'react';
import { User } from '../../types/User';
import TableRow from '../TableRow/TableRow';
import './Table.css';

interface TableProps {
    users: User[] | undefined;
}

const Table: FC<TableProps> = memo(({users}) => {
    console.log('render');

    return (
        users && users.length > 0 ? (
            <table className='table'>
                <tbody>
                    <tr className='table__row'>
                        <th className='table__cell'>Имя</th>
                        <th className='table__cell'>Фотография</th>
                        <th className='table__cell'>Местоположение</th>
                        <th className='table__cell'>Почта</th>
                        <th className='table__cell'>Телефон</th>
                        <th className='table__cell'>Дата регистрации</th>
                    </tr>
                    {
                        users.map((user) => (
                            <TableRow key={user.login.salt + user.id.value} user={user}/>
                        )
                    )}
                </tbody>
            </table>
        ) : <div className='table__not-users'>Ничего не найдено</div>
    );
});

export default Table;