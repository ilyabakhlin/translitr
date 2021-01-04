import {Key} from "../Interfaces/Key";
import {Character} from "../Interfaces/Keys/Character";
import {Digit} from "../Interfaces/Keys/Digit";
import {Letters} from "../Objects/Letters";
import {Numbers} from "../Objects/Numbers";

export class Translitr
{
    /**
     * @type {string}
     * @private
     */
    private layout: string = "en-US";

    /**
     * @param {string} code
     * @param {Key[]} Keys
     * @return {Key}
     */
    private getKey(code: string, Keys: Key[]): Key
    {
        const key: Key | undefined = Keys.find((key: Key): boolean => key.code === code);
        if (typeof key === "undefined") {
            throw Error(`The ${code} key was not found.`);
        } else {
            return key;
        }
    }

    /**
     * @return {string}
     */
    public getLayout(): string
    {
        return this.layout;
    }

    /**
     * @param {string} code
     * @return {Character}
     */
    public getLetter(code: string): Character
    {
        return this.getKey(code, Letters) as Character;
    }

    /**
     * @param {string} code
     * @return {Digit}
     */
    public getNumber(code: string): Digit
    {
        return this.getKey(code, Numbers) as Digit;
    }

    /**
     * @param {string} layout
     * @return {string}
     */
    public setLayout(layout: string): string
    {
        if (/^[a-z]{2}-[A-Z]{2}$/.test(layout)) {
            return this.layout = layout;
        } else {
            throw Error("The given argument for the layout property is not valid.");
        }
    }

    /**
     * @param {KeyboardEvent} event
     * @return {string}
     */
    public translitLetter(event: KeyboardEvent): string
    {
        return this.getLetter(event.code).code;
    }

    /**
     * @param {KeyboardEvent} event
     * @return {string}
     */
    public translitNumber(event: KeyboardEvent): string
    {
        return this.getNumber(event.code).number;
    }
}
