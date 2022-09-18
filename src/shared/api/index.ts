import { IMessage, IAPI, IUser } from "../types"
import fakeApi from "./fakeApi"

class API {
    public api: IAPI = fakeApi
    constructor(
        api?: IAPI
    ) {
        this.api = api || this.api
    }

    //i use arrow function to bind context
    get = async (props: { limit?: number, skip?: number } = {}): Promise<{ messages: Array<IMessage>, numberAllMessages: number }> => {
        return this.api.get(props)
    }

    send = async (props: IMessage): Promise<IMessage> => {
        return this.api.send(props)
    }

    auth = async (user: IUser) => {
        return this.api.auth(user)
    }

    setApi = (api: IAPI) => {
        this.api = api
    }
}

const api = new API()
export default api