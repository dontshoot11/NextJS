import styles from './Button.module.css';
import { ButtonProps } from "./Button.props";
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({appearance, arrow = 'none', children, className, ...props /* это означает, что все пропсы, которые приходят, будут падать в переменную props (кроме тех, кот объявлены*/}: ButtonProps): JSX.Element => {
       return (
       <button className={cn(styles.button, className, {   //cn - функция, куда передаются наборы классов через запятую, либо объект с условием. первым элементом передаем просто button, 
              [styles.primary] : appearance === 'primary', //а это уже условие. применится класс primary в случае, если передан appearance primary (это пропс)
              [styles.ghost] : appearance === 'ghost'  
              })}        {...props}
       >
              {children}
              {arrow != 'none' && <span className={cn(styles.arrow,{
                     [styles.down]: arrow==='down'
                     })}> <ArrowIcon/> </span>}
       </button>
       );
};
    

