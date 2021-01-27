import {Translitr} from "../src/TypeScript/Classes/Translitr";
import {Translitr as TranslitrInterface} from "../src/TypeScript/Interfaces/Translitr";
import {AltRights} from "./Objects/AltRights";
import {Layouts} from "./Objects/Layouts";

describe("Testing the constructor method.", (): void => {
    test("", (): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.layout).toMatch(/^en-US$/);
    });
    test.each(Layouts.Invalid)("", (layout: string): void => { // TODO: Add a description.
        expect((): TranslitrInterface => new Translitr(layout)).toThrow(Error("The given argument for the {layout} parameter is not valid."));
    });
    test.each(Layouts.Valid)("", (layout: string, expected: RegExp): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr(layout);
        expect(translitr.layout).toMatch(expected);
    });
});

describe("Testing the altRight property's getter method.", (): void => {
    test("", (): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.altRight).toBeFalsy();
    });
    test.each(AltRights.False)("", (value: boolean): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        translitr.altRight = value;
        expect(translitr.altRight).toBeFalsy();
    });
    test.each(AltRights.True)("", (value: boolean): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        translitr.altRight = value;
        expect(translitr.altRight).toBeTruthy();
    });
});

describe("Testing the altRight property's setter method.", (): void => {
    test.each(AltRights.False)("", (value: boolean): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.altRight = value).toBeFalsy();
    });
    test.each(AltRights.True)("", (value: boolean): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.altRight = value).toBeTruthy();
    });
});

describe("Testing the layout property's getter method.", (): void => {
    test("", (): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.layout).toMatch(/^en-US$/);
    });
    test.each(Layouts.Valid)("", (layout: string, expected: RegExp): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        translitr.layout = layout;
        expect(translitr.layout).toMatch(expected);
    });
});

describe("Testing the layout property's setter method.", (): void => {
    test.each(Layouts.Invalid)("", (layout: string): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect((): string => translitr.layout = layout).toThrow(Error("The given argument for the {layout} parameter is not valid."));
    });
    test.each(Layouts.Valid)("", (layout: string, expected: RegExp): void => { // TODO: Add a description.
        const translitr: TranslitrInterface = new Translitr();
        expect(translitr.layout = layout).toMatch(expected);
    });
});
