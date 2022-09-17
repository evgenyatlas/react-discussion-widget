import { createStore } from 'effector'
import { IMessage, IMessageMap } from 'shared/types'

/**STORES**/
//number of all messages
export const $numberAllMessages = createStore(0)
//dictionary of comments
export const $messageMap = createStore<IMessageMap>({})
export const $messageList = $messageMap.map<Array<IMessage>>(Object.values)
//number of messages displayed
export const $numberMessages = $messageList.map(messsages => messsages.length)