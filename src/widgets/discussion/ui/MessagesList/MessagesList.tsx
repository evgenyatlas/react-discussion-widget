import { useList } from 'effector-react'
import { $messageList, Message } from 'entities/message'
import React from 'react'
import styles from './MessagesList.module.css'

interface MessagesListProps {
    className?: string
}

export function MessagesList({ className }: MessagesListProps) {
    const messages = useList(
        $messageList,
        (message) =>
            <Message
                {...message}
                className={styles.MessagesList__Item}
            />
    )
    return (
        <div className={`${styles.MessagesList}${className ? ' ' + className : ''}`}>
            {messages}
        </div>
    )
}