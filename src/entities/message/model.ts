import { createEffect, createEvent, createStore } from 'effector'
import { IMessage, IMessageMap } from 'shared/types'
import API from 'shared/api'
import { setPayload } from 'shared/lib/effector/setPayload'
import { listToMap } from 'shared/lib/collection/listToMap'

/**STORES**/
//number of all messages
export const $numberAllMessages = createStore(1)
//dictionary of messages
export const $messageMap = createStore<IMessageMap>({})
export const $messageList = $messageMap.map<Array<IMessage>>((messageMap) => Object.values(messageMap).sort((a, b) => b.date - a.date))
//number of messages displayed
export const $numberMessages = $messageList.map(messsages => messsages.length)

//**EVENTS**/
export const addMessage = createEvent<IMessage>()

/**EFFECTS**/
export const fetchMessagesFx = createEffect(API.get)

$messageMap.on(
    [fetchMessagesFx.doneData.map(({ messages }) => messages), addMessage],
    (state, comments) => {
        if (Array.isArray(comments))
            return ({
                ...state,
                ...listToMap(comments, 'id')
            })
        else
            return ({
                ...state,
                [comments.id]: {
                    ...comments
                }
            })
    }
)
$numberAllMessages.on(addMessage, count => count + 1)
$numberAllMessages.on(
    fetchMessagesFx.doneData.map(({ numberAllMessages }) => numberAllMessages),
    setPayload
)