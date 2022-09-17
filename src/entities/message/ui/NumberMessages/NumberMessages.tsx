import React from 'react'
import { useStore } from 'effector-react'
import { $numberAllMessages } from 'entities/message/model'
import { Counter } from 'shared/ui/Counter'

interface NumberMessagesProps {
    className?: string
}

export function NumberMessages({ className }: NumberMessagesProps) {
    const number = useStore($numberAllMessages)
    return (
        <Counter className={className} value={number} titles={['Комментарий', 'Комментария', 'Комментариев']} />
    )
}

