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
            /^KeyA$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyB"}),
            /^KeyB$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyC"}),
            /^KeyC$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyD"}),
            /^KeyD$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyE"}),
            /^KeyE$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyF"}),
            /^KeyF$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyG"}),
            /^KeyG$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyH"}),
            /^KeyH$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyI"}),
            /^KeyI$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyJ"}),
            /^KeyJ$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyK"}),
            /^KeyK$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyL"}),
            /^KeyL$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyM"}),
            /^KeyM$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyN"}),
            /^KeyN$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyO"}),
            /^KeyO$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyP"}),
            /^KeyP$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyQ"}),
            /^KeyQ$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyR"}),
            /^KeyR$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyS"}),
            /^KeyS$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyT"}),
            /^KeyT$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyU"}),
            /^KeyU$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyV"}),
            /^KeyV$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyW"}),
            /^KeyW$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyX"}),
            /^KeyX$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyY"}),
            /^KeyY$/,
        ],
        [
            new KeyboardEvent("keydown", {code: "KeyZ"}),
            /^KeyZ$/,
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
