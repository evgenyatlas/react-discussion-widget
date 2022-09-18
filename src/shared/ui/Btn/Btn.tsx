import React, { ReactNode } from 'react'
import { ButtonHTMLAttributes } from 'react'
import styles from './Btn.module.css'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export function Btn({ className, children, ...props }: BtnProps) {
    return (
        <button className={`${styles.Btn}${className ? ' ' + className : ''}`} {...props}>
            {children}
        </button>
    )
}