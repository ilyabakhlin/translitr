import {Character} from "../../src/TypeScript/Interfaces/Keys/Character";

export namespace Letter
{
    export type Invalid = [code: string];

    export type Valid = [code: string, letter: Character];
}
