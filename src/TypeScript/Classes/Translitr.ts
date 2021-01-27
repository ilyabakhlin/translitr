import {Key as KeyInterface} from "../Interfaces/Key";
import {Translitr as TranslitrInterface} from "../Interfaces/Translitr";
import {Keys} from "../Objects/Keys";

export class Translitr implements TranslitrInterface
{
    /**
     * @type {boolean}
     */
    private _altRight: boolean = false;

    /**
     * @type {string}
     */
    declare private _layout: string;

    /**
     * @return {boolean}
     */
    public get altRight(): boolean
    {
        return this._altRight;
    }

    /**
     * @param {boolean} value
     */
    public set altRight(value: boolean)
    {
        this._altRight = value;
    }

    /**
     * @return {string}
     */
    public get layout(): string
    {
        return this._layout;
    }

    /**
     * @param {string} layout
     * @return {string}
     */
    public set layout(layout: string)
    {
        if (/^[a-z]{2}-[A-Z]{2}$/.test(layout)) {
            this._layout = layout;
        } else {
            throw new Error("The given argument for the {layout} parameter is not valid.");
        }
    }

    /**
     * @param {string} code
     * @return {Key}
     */
    public getKey(code: string): KeyInterface
    {
        const key: KeyInterface | undefined = Keys.find((key: KeyInterface): boolean => key.code === code);
        if (typeof key === "undefined") {
            throw new Error(`No key was found with the "${code}" code.`);
        } else {
            return key;
        }
    }

    /**
     * @param {KeyboardEvent} event
     * @return {string | undefined}
     */
    public translit(event: KeyboardEvent): string
    {
        const key: KeyInterface = this.getKey(event.code);
        return key.code;
    }

    /**
     * @param {string} layout
     */
    public constructor(layout: string = "en-US")
    {
        this.layout = layout;
    }
}
