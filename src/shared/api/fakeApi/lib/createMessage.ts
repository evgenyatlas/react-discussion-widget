import { generateId } from "shared/lib/math/generateId"
import { IMessage } from "shared/types"

export function createMessage({ userName, text }: Pick<IMessage, "userName" | "text">): IMessage {
    return ({
        id: generateId(),
        userName: userName,
        text: text,
        date: new Date().getTime(),
        like: 0,
        dislike: 0,
    })
}