import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import {
    useEffect,
    useState,
    KeyboardEvent,
    forwardRef,
    ForwardedRef,
} from 'react';

export const Rating = forwardRef(
    (
        { isEditable = false, rating, error, setRating, ...props }: RatingProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
            new Array(5).fill(<></>)
        );

        useEffect(() => {
            ratingConstruct(rating);
        }, [rating]);

        const ratingConstruct = (currentRating: number) => {
            const updatedArray = ratingArray.map(
                (r: JSX.Element, i: number) => {
                    return (
                        <StarIcon
                            className={cn(styles.star, {
                                [styles.filled]: i < currentRating,
                                [styles.editable]: isEditable,
                                [styles.error]: error,
                            })}
                            onMouseEnter={() => changeDisplay(i + 1)}
                            onMouseLeave={() => changeDisplay(rating)}
                            onClick={() => clickHandler(i + 1)}
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                                isEditable && handleSpace(i + 1, e)
                            }
                        />
                    );
                }
            );
            setRatingArray(updatedArray);
        };

        const changeDisplay = (i: number) => {
            if (isEditable) {
                ratingConstruct(i);
            }
        };

        const clickHandler = (i: number) => {
            if (isEditable && setRating) {
                setRating(i);
            }
        };

        const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
            if (e.code === 'Space' && setRating) {
                setRating(i);
            }
        };

        return (
            <div className={styles.wrapper} {...props} ref={ref}>
                {ratingArray.map((r, i) => (
                    <span key={i}>{r}</span>
                ))}
                {error && (
                    <span className={styles.errorMessage}>{error.message}</span>
                )}
            </div>
        );
    }
);
