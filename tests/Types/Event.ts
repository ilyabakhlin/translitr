import {Key} from "../../src/TypeScript/Types/Key";

export namespace Event
{
    export type Invalid = [KeyboardEvent];

    export type Valid = [KeyboardEvent, Key];
}
