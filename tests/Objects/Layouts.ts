import {Layout} from "../Types/Layout";

export namespace Layouts
{
    /**
     * @type Layout.Invalid[]
     */
    export const Invalid: Layout.Invalid[] = [
        ["en-us"],
    ];
    /**
     * @type Layout.Valid[]
     */
    export const Valid: Layout.Valid[] = [
        ["en-US", /^en-US$/],
    ];
}
