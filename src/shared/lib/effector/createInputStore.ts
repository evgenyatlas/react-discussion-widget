import { createEvent, createStore, Store, Event } from "effector";
import { takeValue } from "../react/takeValue";
import { setPayload } from "./setPayload";

type OnChange = (value: React.ChangeEvent<HTMLInputElement>) => void

export function createInputStore(defaultValue: string): {
    $store: Store<string>
    change: Event<string>
    clear: Event<void>
    /**handler for react input */
    onChange: OnChange
} {
    const $store = createStore(defaultValue)

    const change = createEvent<string>()
    const clear = createEvent()

    $store.on(change, setPayload)
    $store.on(clear, () => "")

    return {
        $store,
        change,
        clear,
        onChange: e => change(takeValue(e))
    }
}