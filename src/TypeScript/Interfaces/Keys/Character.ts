import {Key} from "../Key";
import {Layout} from "../Layout";

export interface Character extends Key
{
    /**
     * @type Layout[]
     */
    layouts: Layout[];
}
