import { ReactNode } from "react";

export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3'; //tag может быть или h1, или h2, или h3
    children: ReactNode; //зарезервированное реактом свойство для вложений, которые оборачивает наш компонент
}