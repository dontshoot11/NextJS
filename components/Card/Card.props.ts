import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLParagraphElement
    > {
    color?: 'white' | 'blue';
    children: ReactNode; //зарезервированное реактом свойство для вложений, которые оборачивает наш компонент
}
