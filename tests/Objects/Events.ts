import {Event} from "../Types/Event";

export namespace Events
{
    /**
     * @type Event.Invalid[]
     */
    export const Invalid: Event.Invalid[] = [
        [new KeyboardEvent("keydown")],
    ];

    /**
     * @type Event.Valid[]
     */
    export const Valid: Event.Valid[] = [
        [new KeyboardEvent("keydown", {code: "KeyA"}), {code: "KeyA"}],
    ];
}
