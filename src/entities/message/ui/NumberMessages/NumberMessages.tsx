import React from 'react'
import { useStore } from 'effector-react'
import styles from './NumberMessages.module.css'
import { $numberAllMessages } from 'entities/message/model'
import { declOfNum } from 'shared/lib/str/declOfNum'

interface NumberMessagesProps {
    className?: string
}

export function NumberMessages({ className }: NumberMessagesProps) {
    const number = useStore($numberAllMessages)
    return (
        <div className={`${styles.NumberMessages}${className ? ' ' + className : ''}`}>
            {number} {declOfNum(number, ['Комментарий', 'Комментария', 'Комментариев'])}
        </div>
    )
}