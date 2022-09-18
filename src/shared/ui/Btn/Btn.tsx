import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import styles from './Btn.module.css'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    beforeIcon?: string
    afterIcon?: string
}

export function Btn({ className, beforeIcon, afterIcon, children, ...props }: BtnProps) {
    return (
        <button className={`${styles.Btn}${className ? ' ' + className : ''}`} {...props}>
            {beforeIcon && <Icon icon={beforeIcon} location="LEFT" />}
            {children}
            {afterIcon && <Icon icon={afterIcon} location="RIGHT" />}
        </button>
    )
}

interface IconProps {
    icon: string
    location: "LEFT" | "RIGHT"
}

function Icon({ icon, location }: IconProps) {
    return (
        <img src={icon} className={`${styles.Btn__Icon} ${location === 'LEFT' ? styles.Btn__Icon_left : styles.Btn__Icon_right}`} alt="" />
    )
}