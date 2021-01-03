import {Key} from "../../src/TypeScript/Types/Key";

export namespace Number
{
    export type Invalid = [code: string];

    export type Valid = [code: string, number: Key];
}
