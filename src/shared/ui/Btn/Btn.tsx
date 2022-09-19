import React, { ReactNode } from 'react'
import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Btn.module.css'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    mode?: 'primary' | 'transparent'
}

export function Btn({ className, children, mode, ...props }: BtnProps) {
    return (
        <button className={clsx(styles.Btn, className, styles[`Btn_mode_${mode}`])} {...props}>
            {children}
        </button>
    )
}