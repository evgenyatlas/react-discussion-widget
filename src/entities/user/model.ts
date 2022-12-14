import { createEvent, createStore } from "effector"
import { setPayload } from "shared/lib/effector/setPayload"
import { IUser } from "shared/types"

/**!!!THIS is a test implementation, finish later!!!*/

/**STORES**/
export const $user = createStore<IUser>({ name: 'Eugene' })
export const $userName = $user.map(({ name: userName }) => userName)
export const $logged = $userName.map(userName => !!userName)

/**EVENTS**/
export const setUser = createEvent<IUser>()

$user.on(setUser, setPayload)