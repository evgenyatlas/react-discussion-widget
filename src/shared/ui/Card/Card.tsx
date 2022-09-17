import React, { ReactNode, HTMLAttributes } from 'react'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div className={`${styles.Card}${className ? ' ' + className : ''}`} {...props}>
            {children}
        </div>
    )
}
