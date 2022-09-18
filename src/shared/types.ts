export type IMessageMap = Record<string, IMessage>

export interface IMessage {
    id: string | number
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
    send(props: { message: string, user: IUser }): Promise<IMessage>
    auth(props: IUser): Promise<IUser>
}