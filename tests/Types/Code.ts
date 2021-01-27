import {Key as KeyInterface} from "../../src/TypeScript/Interfaces/Key";

export namespace Code
{
    export type Invalid = [string];

    export type Valid = [string, KeyInterface];
}
