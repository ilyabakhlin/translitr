import {Event} from "../Types/Event";

export namespace Events
{
    /**
     * @type Event.Invalid[]
     */
    export const InvalidLetters: Event.Invalid[] = [
        [new KeyboardEvent("keydown")],
    ];

    /**
     * @type Event.Valid[]
     */
    export const InvalidNumbers: Event.Invalid[] = [
        [new KeyboardEvent("keydown")],
    ];

    /**
     * @type Event.Valid[]
     */
    export const ValidLetters: Event.Valid[] = [
        [new KeyboardEvent("keydown", {code: "KeyA"}), "KeyA"],
    ];
    /**
     * @type Event.Valid[]
     */
    export const ValidNumbers: Event.Valid[] = [
        [new KeyboardEvent("keydown", {code: "Digit0"}), "Digit0"],
    ];
}
