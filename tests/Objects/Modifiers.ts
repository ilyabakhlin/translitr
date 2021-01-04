import {Modifier} from "../Types/Modifier";

export namespace Modifiers
{
    /**
     * @type Modifier[]
     */
    export const False: Modifier[] = [
        [new KeyboardEvent("keydown", {altKey: false})],
        [new KeyboardEvent("keydown", {altKey: true})],
        [new KeyboardEvent("keydown", {ctrlKey: false})],
        [new KeyboardEvent("keydown", {ctrlKey: true})],
        [new KeyboardEvent("keydown", {shiftKey: false})],
    ];

    /**
     * @type Modifier[]
     */
    export const True: Modifier[] = [
        [new KeyboardEvent("keydown", {shiftKey: true})],
    ];
}
