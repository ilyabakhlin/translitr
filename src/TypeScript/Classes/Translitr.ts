import {Letters} from "../Objects/Letters";
import {Key} from "../Types/Key";

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
     * @param {string} code
     * @return {Key}
     */
    public findKey(code: string): Key
    {
        return this.getLetter(code);
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
     * @return {Key}
     */
    public getLetter(code: string): Key
    {
        return this.getKey(code, Letters);
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
     * @return {Key}
     */
    public translit(event: KeyboardEvent): Key
    {
        return this.findKey(event.code);
    }
}
