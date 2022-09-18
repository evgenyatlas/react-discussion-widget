import React from 'react'
import { useStore } from 'effector-react'
import { $isEveryLoaded } from 'features/loadMore'
import { fetchMessagesFx } from 'entities/message'
import { loadMore } from '../../model'
import { Btn } from 'shared/ui/Btn'
import styles from './LoadMore.module.css'
import { Spinner } from 'shared/ui/Spinner'

interface LoadMoreProps {
    className?: string
}

export function LoadMore({ className }: LoadMoreProps) {
    const fetching = useStore(fetchMessagesFx.pending)
    console.log(fetching)
    const allLoaded = useStore($isEveryLoaded)
    return (
        !allLoaded ?
            <Btn onClick={() => loadMore()} className={`${styles.LoadMore}${className ? ' ' + className : ''}`}>
                ЗАГРУЗИТЬ ЕЩЕ <Spinner visible={fetching} />
            </Btn>
            :
            null
    )
}