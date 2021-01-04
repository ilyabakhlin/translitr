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
            new KeyboardEvent("keydown", {code: "KeyA", shiftKey: false}),
            /^a$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyA", shiftKey: true}),
            /^A$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyB", shiftKey: false}),
            /^b$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyB", shiftKey: true}),
            /^B$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyC", shiftKey: false}),
            /^c$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyC", shiftKey: true}),
            /^C$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyD", shiftKey: false}),
            /^d$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyD", shiftKey: true}),
            /^D$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyE", shiftKey: false}),
            /^e$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyE", shiftKey: true}),
            /^E$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyF", shiftKey: false}),
            /^f$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyF", shiftKey: true}),
            /^F$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyG", shiftKey: false}),
            /^g$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyG", shiftKey: true}),
            /^G$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyH", shiftKey: false}),
            /^h$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyH", shiftKey: true}),
            /^H$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyI", shiftKey: false}),
            /^i$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyI", shiftKey: true}),
            /^I$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyJ", shiftKey: false}),
            /^j$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyJ", shiftKey: true}),
            /^J$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyK", shiftKey: false}),
            /^k$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyK", shiftKey: true}),
            /^K$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyL", shiftKey: false}),
            /^l$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyL", shiftKey: true}),
            /^L$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyM", shiftKey: false}),
            /^m$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyM", shiftKey: true}),
            /^M$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyN", shiftKey: false}),
            /^n$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyN", shiftKey: true}),
            /^N$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyO", shiftKey: false}),
            /^o$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyO", shiftKey: true}),
            /^O$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyP", shiftKey: false}),
            /^p$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyP", shiftKey: true}),
            /^P$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyQ", shiftKey: false}),
            /^q$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyQ", shiftKey: true}),
            /^Q$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyR", shiftKey: false}),
            /^r$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyR", shiftKey: true}),
            /^R$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyS", shiftKey: false}),
            /^s$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyS", shiftKey: true}),
            /^S$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyT", shiftKey: false}),
            /^t$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyT", shiftKey: true}),
            /^T$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyU", shiftKey: false}),
            /^u$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyU", shiftKey: true}),
            /^U$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyV", shiftKey: false}),
            /^v$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyV", shiftKey: true}),
            /^V$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyW", shiftKey: false}),
            /^w$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyW", shiftKey: true}),
            /^W$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyX", shiftKey: false}),
            /^x$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyX", shiftKey: true}),
            /^X$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyY", shiftKey: false}),
            /^y$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyY", shiftKey: true}),
            /^Y$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyZ", shiftKey: false}),
            /^z$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyZ", shiftKey: true}),
            /^Z$/,
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
