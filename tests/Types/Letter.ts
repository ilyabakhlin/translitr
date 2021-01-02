import {Key} from "../../src/TypeScript/Types/Key";

export namespace Letter
{
    export type Invalid = [code: string];
    export type Valid = [code: string, letter: Key];
}
