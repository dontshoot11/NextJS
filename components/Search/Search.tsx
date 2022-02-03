import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Button } from '..';
import { Input } from '../Input/Input';
import { useState } from 'react';
import SearchIcon from './icon.svg';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search', //роутер добавляет в урл это
            query: {
                q: search, //и содержимое стейта search
            },
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={() => handleKeyDown}
            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};
