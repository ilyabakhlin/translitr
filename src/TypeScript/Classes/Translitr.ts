import {Translitr as TranslitrInterface} from "../Interfaces/Translitr";

export class Translitr implements TranslitrInterface
{
    /**
     * @type {string}
     * @private
     */
    private layout: string = "en-US";

    /**
     * @return {string}
     */
    public getLayout(): string
    {
        return this.layout;
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
            throw new Error(); // TODO: Define an error message.
        }
    }
}
