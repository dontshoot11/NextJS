import styles from './Up.module.css';
import { useScrollY } from '../../hooks/UseScrollY';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight }); //триггерит анимацию при изменении Y (высоты прокрутки)
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <motion.div
            animate={controls}
            className={styles.up}
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon appearance={'primary'} icon={'up'} />
        </motion.div>
    );
};
