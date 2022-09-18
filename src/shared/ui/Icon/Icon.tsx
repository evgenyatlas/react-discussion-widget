import React, { ImgHTMLAttributes, SVGProps } from "react"
import { IconProps } from './types'
import styles from './Icon.module.css'
import clsx from 'clsx'
import { useIcon } from "./useIcon"

//i use this export format for dot notation (<Icon.Send />)
export const Icon = {
    Send(props: IconProps) {
        return (
            <svg viewBox="0 0 369 369" fill="none" xmlns="http://www.w3.org/2000/svg" {...useIcon(props)}>
                <path d="M365.252 178.951L9.87366 0.72068C8.43225 -2.2821e-05 6.77464 -0.144163 5.18909 0.216188C1.58557 1.08103 -0.720676 4.75662 0.216238 8.4322L36.828 158.05C37.4045 160.284 39.0621 162.158 41.2242 162.879L103.997 184.428L41.2963 205.977C39.0621 206.77 37.4045 208.499 36.9 210.806L0.216238 360.568C-0.144113 362.153 2.74993e-05 363.811 0.720731 365.18C2.37835 368.568 6.48636 369.865 9.87366 368.207L365.252 191.058C366.55 190.41 367.631 189.329 368.279 188.031C369.937 184.716 368.568 180.608 365.252 178.951ZM42.0891 318.046L63.494 230.697L188.896 187.671C189.905 187.311 190.698 186.59 190.986 185.581C191.563 183.779 190.626 181.905 188.896 181.257L63.494 138.231L42.1612 51.1699L308.965 184.932L42.0891 318.046Z" fill="#A6A6A6" />
            </svg>
        )
    }
}