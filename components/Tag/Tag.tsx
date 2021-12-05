import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size, children, color, href, className, ...props}: TagProps): JSX.Element => {
                return (
                 <div className={cn(styles.tag, className, {
                    [styles.big]: size === 'big',
                    [styles.small]: size === 'small',
                    [styles.ghost]: color === 'ghost',
                    [styles.red]: color === 'red',
                    [styles.gray]: color === 'gray',
                    [styles.green]: color === 'primary',
                    [styles.green]: color === 'green',
                    })}
                    {...props}
                    > {
                        href ? <a href={href}>{children}</a> : <>{children} </> //либо обернут в ссылку, либо нет
                    }
                    
                    </div>)
                    ;
        };
    
                
