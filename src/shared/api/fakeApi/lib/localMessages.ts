import { IMessage } from "../../../types"

const key = "discussion"

export function get(): IMessage[] {
    if (typeof window === 'undefined') return []
    const rawMessages = localStorage.getItem(key)
    return rawMessages ? JSON.parse(rawMessages) : []
}

export function save(message: IMessage) {
    if (typeof window === 'undefined') return
    const rawMessages = localStorage.getItem(key)
    const messages = rawMessages ? JSON.parse(rawMessages) : []
    localStorage.setItem(key, JSON.stringify([message, ...messages]))
}