import {Translitr as TranslitrInterface} from "../Interfaces/Translitr";

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
     * @param {string} layout
     */
    public constructor(layout: string = "en-US")
    {
        this.layout = layout;
    }
}
