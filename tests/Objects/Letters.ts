import {Letter} from "../Types/Letter";

export namespace Letters
{
    /**
     * @type Letter.Invalid[]
     */
    export const Invalid: Letter.Invalid[] = [
        ["Digit0"],
        ["Digit1"],
        ["Digit2"],
        ["Digit3"],
        ["Digit4"],
        ["Digit5"],
        ["Digit6"],
        ["Digit7"],
        ["Digit8"],
        ["Digit9"],
    ];

    /**
     * @type Letter.Valid[]
     */
    export const Valid: Letter.Valid[] = [
        ["KeyA", {code: "KeyA"}],
    ];
}
