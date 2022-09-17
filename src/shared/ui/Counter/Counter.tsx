import React from 'react'
import { declOfNum } from 'shared/lib/str/declOfNum'
import styles from './Counter.module.css'

interface CounterProps {
    className?: string
    /** titles (with declensions) of the counter, for example ['Комментарий', 'Комментария', 'Комментариев'] */
    titles?: [string, string, string]
    value: number
}

export function Counter({ className, value, titles }: CounterProps) {
    return (
        <div className={`${styles.Counter}${className ? ' ' + className : ''}`}>
            {value} {titles && declOfNum(value, titles)}
        </div>
    )
}