import { createEffect, createEvent, sample } from "effector"
import { addMessage } from "entities/message"
import { $user } from "entities/user"
import api from "shared/api"
import { createInputStore } from "shared/lib/effector/createInputStore"

export const inputMessage = createInputStore('')
export const submit = createEvent()
export const sendFx = createEffect(api.send)

//Sending the comment (api)
sample({
    //when the form submit happens
    clock: submit,
    //get user and message text
    source: { user: $user, message: inputMessage.$store },
    //send comment (api)
    target: sendFx
})

//add the comment to the store and clear input after a successful response from the api
sample({
    source: sendFx.doneData,
    target: [
        addMessage,
        inputMessage.clear
    ]
})