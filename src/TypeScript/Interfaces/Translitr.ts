import {Key} from "./Key";

export interface Translitr
{
    /**
     * @type {boolean}
     */
    altRight: boolean

    /**
     * @type {string}
     */
    layout: string;

    /**
     * @param {string} code
     * @return {Key}
     */
    getKey(code: string): Key;

    /**
     * @param {KeyboardEvent} event
     * @return {string | undefined}
     */
    translit(event: KeyboardEvent): string;
}
