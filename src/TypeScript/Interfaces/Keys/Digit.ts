import {Key} from "../Key";

export interface Digit extends Key
{
    /**
     * @type {string}
     */
    readonly number: string;
}
