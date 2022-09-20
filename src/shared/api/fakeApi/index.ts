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

//Don't look here, it's just Fake API
class FakeAPI implements IAPI {
    private cacheMessages: ICacheMessages = { list: rawData, map: {} }
    private delayRange: [number, number]
    constructor(delayRange: [number, number] = [400, 900]) {
        this.delayRange = delayRange
        this.init()
    }

    private init() {
        this.cacheMessages.list = localMessages.get()
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
        return {
            messages: this.cacheMessages.list.slice(skip, skip + limit),
            numberAllMessages: this.cacheMessages.list.length
        }
    }

    async send({ user, message }: { message: string, user: IUser }): Promise<IMessage> {
        const msg = createMessage({ userName: user.name, text: message })
        this.addToCache(msg)
        localMessages.save(msg)
        return msg
    }

    private addToCache(message: IMessage) {
        this.cacheMessages.map[message.id] = message
    }
}

export default new FakeAPI()