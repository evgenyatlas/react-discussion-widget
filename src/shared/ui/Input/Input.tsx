import React, { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    value?: string
    placeholder?: string
}

export function Input({ className, value, placeholder, disabled, ...props }: InputProps) {
    return (
        <div className={clsx(styles.Input, className, { [styles.Input_disabled]: disabled })}>
            <input
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                {...props}
            />
        </div>
    )
}