export type IMessageMap = Record<string, IMessage>

export interface IUser {
    name: string
}

export interface IMessage {
    id: string | number
    user: IUser
    date: number
    text: string
    like: number
    dislike: number
}

export interface IRate {
    commentId: string | number
    value: number
}

export interface IAPI {
    get(props: { limit?: number, skip?: number }): Promise<{ messages: Array<IMessage>, numberAllMessages: number }>
    send(props: { message: string, user: IUser }): Promise<IMessage>
    auth(props: IUser): Promise<IUser>
}