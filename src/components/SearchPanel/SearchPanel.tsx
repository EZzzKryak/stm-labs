import { ChangeEvent, FC, FormEvent, memo } from 'react';
import './SearchPanel.css';

interface SearchPanelProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
}

const SearchPanel: FC<SearchPanelProps> = memo(({handleChange, searchValue}) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleReset = () => {
        handleChange({target: {value: ''}} as ChangeEvent<HTMLInputElement>);
    }
    return (
        <form action='submit' className='search' onSubmit={handleSubmit}>
            <input
                value={searchValue}
                className='search__input'
                type='text'
                placeholder='Введите имя'
                onChange={handleChange}    
            />
            <button onClick={handleReset} type='button' className='search__reset'>Очистить</button>
        </form>
    );
});

export default SearchPanel;