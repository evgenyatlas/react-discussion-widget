import { IMessage, IAPI, IUser, IMessageMap } from '../../types'
import * as localMessages from './lib/localMessages'
import rawData from './data'
import { delayRange } from './lib/delayRange'
import { listToMap } from 'shared/lib/collection/listToMap'
import { createMessage } from './lib/createMessage'

interface ICacheMessages {
    list: IMessage[]
    map: IMessageMap
}


class FakeAPI implements IAPI {
    private cacheMessages: ICacheMessages = { list: rawData, map: {} }
    private delayRange: [number, number]
    constructor(delayRange: [number, number] = [100, 400]) {
        this.delayRange = delayRange
        this.init()
    }

    private init() {
        const savedMessages = localMessages.get()
        for (let i = 0; i < savedMessages.length; i++) {
            const message = savedMessages[i]
            this.cacheMessages.list.push(message)
        }
        this.cacheMessages.map = listToMap(this.cacheMessages.list, 'id')
        this.cacheMessages.list = this.cacheMessages.list.sort(
            (a, b) => b.date - a.date
        )
    }

    async auth(user: IUser) {
        return user
    }

    async get({ limit = 6, skip = 0 }: { limit?: number, skip?: number } = {}): Promise<{
        messages: Array<IMessage>,
        numberAllMessages: number
    }> {
        await delayRange(this.delayRange)
        console.log()
        return {
            messages: this.cacheMessages.list.slice(skip, skip + limit),
            numberAllMessages: this.cacheMessages.list.length
        }
    }

    async send(data: IMessage): Promise<IMessage> {
        const { userName, text } = data
        const message = createMessage({ userName, text })
        this.addToCache(message)
        localMessages.save(message)
        return message
    }

    private addToCache(message: IMessage) {
        this.cacheMessages.map[message.id] = message
    }
}

export default new FakeAPI()