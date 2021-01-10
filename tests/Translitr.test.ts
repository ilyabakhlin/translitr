import {Translitr} from "../src/TypeScript/Classes/Translitr";
import {Translitr as TranslitrInterface} from "../src/TypeScript/Interfaces/Translitr";
import {Layouts} from "./Objects/Layouts";

describe("Testing the getLayout method.", (): void => {
    test("", (): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.getLayout()).toMatch(/^en-US$/);
    });
    test.each(Layouts.Valid)("", (layout: string, expected: RegExp): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        translitr.setLayout(layout);
        expect(translitr.getLayout()).toMatch(expected);
    });
});

describe("Testing the setLayout method.", (): void => {
    test.each(Layouts.Invalid)("", (layout: string): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect((): string => translitr.setLayout(layout)).toThrow(Error("The given argument given for the {layout} parameter is not valid."));
    });
    test.each(Layouts.Valid)("", (layout: string, expected: RegExp): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.setLayout(layout)).toMatch(expected);
    });
});
