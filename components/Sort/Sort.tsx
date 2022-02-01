import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
import { KeyboardEvent } from 'react';
import SortIcon from './icon.svg';

export const Sort = ({
    sort,
    setSort,
    className,
    ...props
}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
                tabIndex={0}
                onKeyDown={(e: KeyboardEvent) => {
                    if (e.code === 'Space' || e.code === 'Enter') {
                        e.preventDefault();
                        setSort(SortEnum.Rating);
                    }
                }}
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating,
                })}
            >
                <SortIcon className={styles.sortIcon} /> По рейтингу
            </span>
            <span
                tabIndex={0}
                onKeyDown={(e: KeyboardEvent) => {
                    if (e.code === 'Space' || e.code === 'Enter') {
                        e.preventDefault();
                        setSort(SortEnum.Price);
                    }
                }}
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort === SortEnum.Price,
                })}
            >
                <SortIcon className={styles.sortIcon} /> По цене
            </span>
        </div>
    );
};
