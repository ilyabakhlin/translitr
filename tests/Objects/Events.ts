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
        [
            new KeyboardEvent("keydown", {code: "KeyA"}),
            /^a$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyB"}),
            /^b$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyC"}),
            /^c$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyD"}),
            /^d$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyE"}),
            /^e$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyF"}),
            /^f$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyG"}),
            /^g$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyH"}),
            /^h$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyI"}),
            /^i$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyJ"}),
            /^j$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyK"}),
            /^k$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyL"}),
            /^l$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyM"}),
            /^m$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyN"}),
            /^n$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyO"}),
            /^o$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyP"}),
            /^p$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyQ"}),
            /^q$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyR"}),
            /^r$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyS"}),
            /^s$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyT"}),
            /^t$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyU"}),
            /^u$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyV"}),
            /^v$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyW"}),
            /^w$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyX"}),
            /^x$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyY"}),
            /^y$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyZ"}),
            /^z$/,
        ],
    ];

    /**
     * @type Event.Valid[]
     */
    export const ValidNumbers: Event.Valid[] = [
        [
            new KeyboardEvent("keydown", {code: "Digit0"}),
            /^0$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit1"}),
            /^1$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit2"}),
            /^2$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit3"}),
            /^3$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit4"}),
            /^4$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit5"}),
            /^5$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit6"}),
            /^6$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit7"}),
            /^7$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit8"}),
            /^8$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "Digit9"}),
            /^9$/,
        ],
    ];
}
