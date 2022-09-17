export type IMessageMap = Record<number, IMessage>

export interface IMessage {
    id: number
    userName: string
    date: number
    text: string
    like: number
    dislike: number
}

export interface IUser {
    userName: string
}

export interface IAPI {
    get(props: { limit?: number, skip?: number }): Promise<{ messages: Array<IMessage>, numberAllMessages: number }>
    send(props: IMessage): Promise<IMessage>
    auth(props: IUser): Promise<IUser>
}