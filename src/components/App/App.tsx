import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import './App.css';
import Loader from '../Loader/Loader';
import Table from '../Table/Table';
import { User } from '../../types/User';
import SearchPanel from '../SearchPanel/SearchPanel';
import { useDebounce } from '../../hooks/useDebounce';

const App: FC = () => {
    const [users, setUsers] = useState<User[] | undefined>();
    const [searchValue, setSearchValue] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]  | undefined>();

    useDebounce(() => {
        const filteredUsersData = users?.filter((user) => {
            const fullName = `${user.name.first} ${user.name.last}`;
            return fullName.toLowerCase().includes(searchValue.toLowerCase());
        });
    
        setFilteredUsers(filteredUsersData);
        }, [users, searchValue], 500
    );

    useEffect(() => {
        async function fetchData(): Promise<User[]> {
            try {
                const response = await fetch('https://randomuser.me/api/?results=15', { method: 'GET' });
                const data = await response.json();
                const list = await data.results;
                setUsers(list);
                setFilteredUsers(list); // оптимизировать
                return list;
            } catch(err) {
                throw new Error();
            }
        }
        fetchData();
    }, []);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchValue(term);
        }, []);

    return (
        <div className='app'>
            {users ? (
                <div className='content'>
                    <SearchPanel handleChange={handleChange} searchValue={searchValue}/>
                    <Table users={filteredUsers} />
                </div>
            ) : <Loader />}
        </div>
    )
}

export default App;