import React from 'react'
import clsx from 'clsx'
import styles from './Avatar.module.css'

interface AvatarProps {
    className?: string
    name: string
    color: "blue" | "green" | "red" | "orange"
    size: 's' | 'm'
}

/** Component for displaying an avatar from the first two letters */
export function Avatar({ className, name, color = 'blue', size = 's' }: AvatarProps) {
    return (
        <div className={clsx(styles.Avatar, className, styles[`Avatar_color_${color}`], styles[`Avatar_size_${size}`])}>
            {name.slice(0, 2)}
        </div>
    )
}