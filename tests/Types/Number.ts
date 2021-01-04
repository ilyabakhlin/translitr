import {Digit} from "../../src/TypeScript/Interfaces/Keys/Digit";

export namespace Number
{
    export type Invalid = [code: string];

    export type Valid = [code: string, number: Digit];
}
