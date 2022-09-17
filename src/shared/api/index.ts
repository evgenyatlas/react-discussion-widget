import { IMessage, IAPI, IUser } from "../types"

class API {
    constructor(
        private api?: IAPI
    ) { }

    //i use arrow function to bind context
    get = async (props: { limit?: number, skip?: number } = {}): Promise<{ messages: Array<IMessage>, numberAllMessages: number }> => {
        if (!this.api) throw new Error('You have to define api')
        return this.api.get(props)
    }

    send = async (props: IMessage): Promise<IMessage> => {
        if (!this.api) throw new Error('You have to define api')
        return this.api.send(props)
    }

    auth = async (user: IUser) => {
        if (!this.api) throw new Error('You have to define api')
        return this.api.auth(user)
    }

    setApi = (api: IAPI) => {
        this.api = api
    }
}

const api = new API()
export default api