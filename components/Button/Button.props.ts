import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement > { //экстендим от детальных пропсов HTML
    children: ReactNode; 
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}