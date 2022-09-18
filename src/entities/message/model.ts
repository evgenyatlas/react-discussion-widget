import { createEffect, createStore } from 'effector'
import { IMessage, IMessageMap } from 'shared/types'
import API from 'shared/api'
import { setPayload } from 'shared/lib/effector/setPayload'
import { listToMap } from 'shared/lib/collection/listToMap'

/**STORES**/
//number of all messages
export const $numberAllMessages = createStore(0)
//dictionary of messages
export const $messageMap = createStore<IMessageMap>({})
export const $messageList = $messageMap.map<Array<IMessage>>(Object.values)
//number of messages displayed
export const $numberMessages = $messageList.map(messsages => messsages.length)

/**EFFECTS**/
export const fetchMessagesFx = createEffect(API.get)

$messageMap.on(
    fetchMessagesFx.doneData.map(({ messages }) => messages),
    (state, comments) => listToMap(comments, 'id')
)
$numberAllMessages.on(
    fetchMessagesFx.doneData.map(({ numberAllMessages }) => numberAllMessages),
    setPayload
)