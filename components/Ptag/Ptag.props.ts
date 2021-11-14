import { DetailedHTMLProps,  HTMLAttributes,  ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement > {
    size?: 'big' | 'small'; 
    children: ReactNode; //зарезервированное реактом свойство для вложений, которые оборачивает наш компонент
}