import { Ptag, Tag } from "../../components";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from 'classnames';
import {format} from 'date-fns'


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <Ptag >OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Ptag>
        <a href='#'target="_blank" className={styles.footerLink}>Пользовательское соглашение</a>
        <a href='#'target="_blank" className={styles.footerLink}>Политика конфиденциальности</a>
    </footer>
  );
};
