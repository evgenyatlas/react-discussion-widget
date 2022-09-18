import React, { FC } from 'react'
import clsx from 'clsx'
import styles from './Spinner.module.css'
import { Transition } from 'react-transition-group'
import { useSpinDelay } from './lib/usePinDelay'

interface SpinnerProps {
    className?: string
    visible?: boolean
    minDuration?: number
}

export function Spinner({ className, visible = true, minDuration = 1000, }: SpinnerProps) {
    const display = useSpinDelay(visible, { minDuration, delay: 0 })
    return (
        <Transition
            timeout={300}
            in={display}
            unmountOnExit
        >
            {
                state =>
                    <div className={clsx(styles[`Spinner__Container_${state}`], styles.Spinner__Container)}>
                        <div className={clsx(styles.Spinner, styles[`Spinner_${state}`], className)}></div>
                    </div>
            }
        </Transition>
    )
}
