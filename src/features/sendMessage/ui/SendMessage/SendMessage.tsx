import React from 'react'
import { useStore } from 'effector-react'
import { $logged } from 'entities/user'
import clsx from 'clsx'
import { inputMessage, sendFx, submit } from 'features/sendMessage/model'
// import { useInput } from 'shared/lib/react/useInput'
import { Input } from 'shared/ui/Input'
import { Spinner } from 'shared/ui/Spinner'
import styles from './SendMessage.module.css'
import { Icon } from 'shared/ui/Icon'
import { Btn } from 'shared/ui/Btn'
import { UserAvatar } from 'entities/user/ui/UserAvatar'

interface SendMessageProps {
    className?: string
}

/** Form for sending messages */
export function SendMessage({ className }: SendMessageProps) {
    const logged = useStore($logged)
    const fetching = useStore(sendFx.pending)
    // const [value, onChange, clearValue] = useInput("")

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                submit()
            }}
            className={clsx(styles.SendMessage, className, { [styles.SendMessage_disable]: !logged })}
        >
            <UserAvatar />
            <InputSendMessage />
            <Btn type="submit" mode="transparent" className={styles.SendMessage__Send}>
                <Icon.Send />
            </Btn>
            <Spinner visible={fetching} minDuration={700}></Spinner>
            {
                !logged
                &&
                <div className={styles.SendMessage__Disable} />
            }
        </form>
    )
}

function InputSendMessage() {
    const value = useStore(inputMessage.$store)
    return (
        <Input
            className={styles.SendMessage__Input}
            onChange={inputMessage.onChange}
            value={value}
            placeholder="Введите ваше сообщение"
            required
        />
    )
}