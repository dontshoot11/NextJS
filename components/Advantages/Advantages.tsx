import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './icon.svg';
import { useReducer } from 'react';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map((a) => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}></hr>
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    );
};