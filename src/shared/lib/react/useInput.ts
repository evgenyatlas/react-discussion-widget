import { useState } from "react"
import { takeValue } from "./takeValue"

type OnChange = (value: React.ChangeEvent<HTMLInputElement>) => void

export function useInput(defaultValue: string = ""): [string, OnChange, () => void] {
    const [value, change] = useState(defaultValue)
    return [
        value,
        (e) => change(takeValue(e)),
        () => change("")
    ]
}