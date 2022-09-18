import { combine, createEvent, sample } from "effector"
import { $numberMessages, $numberAllMessages, fetchMessagesFx } from "entities/message"

//store
export const $isEveryLoaded = combine(
    $numberMessages,
    $numberAllMessages,
    (numberMessage, numberAllMessages) => numberMessage >= numberAllMessages
)

//event
export const loadMore = createEvent()

//loading new batch of messages
sample({
    //when the loadmore are emitted
    clock: loadMore,
    //get the current number of messages
    source: $numberMessages,
    //call the effect with the necessary parameters to load new batch of messages
    fn: (numberMessage) => ({ skip: numberMessage }),
    target: fetchMessagesFx
})