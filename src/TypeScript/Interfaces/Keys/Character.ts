import {Key} from "../Key";
import {Layout} from "../Layout";

export interface Character extends Key
{
    /**
     * @type Layout[]
     */
    readonly layouts: Layout[];
}
