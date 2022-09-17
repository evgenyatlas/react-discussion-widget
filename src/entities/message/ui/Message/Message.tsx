import React from 'react'
import { timeAgo } from 'shared/lib/date/timeAgo'
import { IMessage } from 'shared/types'
import { Card } from 'shared/ui/Card'
import styles from './Message.module.css'

interface MessageProps extends IMessage {
    className?: string
}

export function Message({ className, userName, date, text }: MessageProps) {
    return (
        <Card className={`${styles.Message}${className ? ' ' + className : ''}`}>
            <div className={styles.Message__Top}>
                <div className={styles.Message__UserName}>{userName}</div>
                <div className={styles.Message__Date}>{timeAgo(date)}</div>
            </div>
            <div className={styles.Message__Text}>{text}</div>
        </Card>
    )
}