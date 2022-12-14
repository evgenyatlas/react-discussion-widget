import React, { useEffect } from 'react'
import { IAPI } from 'shared/types'
import apiComment from 'shared/api'
import styles from './Discussion.module.css'
import { fetchMessagesFx } from 'entities/message'
import { MessagesList } from '../MessagesList'
import { LoadMore } from 'features/loadMore'
import { SendMessage } from 'features/sendMessage'

interface DiscussionProps {
    className?: string
    api?: IAPI
}

export function Discussion({ className, api }: DiscussionProps) {
    useEffect(() => {
        if (api) {
            apiComment.setApi(api)
        }
        fetchMessagesFx()
    }, [api])

    return (
        <div className={`${styles.Discussion}${className ? ' ' + className : ''}`}>
            <SendMessage className={styles.Discussion__SendMessage} />
            <MessagesList />
            <LoadMore className={styles.Discussion__LoadMore} />
        </div>
    )
}