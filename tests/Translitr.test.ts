import {Translitr} from "../src/TypeScript/Classes/Translitr";
import {Key} from "../src/TypeScript/Types/Key";
import {Codes} from "./Objects/Codes";
import {Events} from "./Objects/Events";
import {Layouts} from "./Objects/Layouts";
import {Letters} from "./Objects/Letters";

describe("Testing the findKey method.", (): void => {
    test.each(Codes.Invalid)("Testing the method's value.", (code: string): void => {
        const translitr: Translitr = new Translitr();
        expect((): Key => translitr.findKey(code)).toThrow(Error(`The ${code} key was not found.`));
    });
    test.each(Codes.Valid)("Testing the method's value.", (code: string, key: Key): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.findKey(code)).toEqual(key);
    });
});
describe("Testing the getLayout method.", (): void => {
    test("Testing the method's default value.", (): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.getLayout()).toMatch(/^en-US$/);
    });
    test.each(Layouts.Valid)("Testing the method's defined value.", (layout: string, expected: RegExp): void => {
        const translitr: Translitr = new Translitr();
        translitr.setLayout(layout);
        expect(translitr.getLayout()).toMatch(expected);
    });
});
describe("Testing the getLetter method.", (): void => {
    test.each(Letters.Invalid)("Testing the method values.", (code: string): void => {
        const translitr: Translitr = new Translitr();
        expect((): Key => translitr.getLetter(code)).toThrow(Error(`The ${code} key was not found.`));
    });
    test.each(Letters.Valid)("Testing the method values.", (code: string, letter: Key): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.getLetter(code)).toEqual(letter);
    });
});
describe("Testing the setLayout method.", (): void => {
    test.each(Layouts.Invalid)("Testing the property definition with not valid values.", (given: string): void => {
        const translitr: Translitr = new Translitr();
        expect((): string => translitr.setLayout(given)).toThrow(Error("The given argument for the layout property is not valid."));
    });
    test.each(Layouts.Valid)("Testing the property definition with valid values.", (layout: string, expected: RegExp): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.setLayout(layout)).toMatch(expected);
    });
});
describe("Testing the translit method.", (): void => {
    test.each(Events.Invalid)("Testing something invalid.", (event: KeyboardEvent): void => {
        const translitr: Translitr = new Translitr();
        expect((): Key => translitr.translit(event)).toThrow(Error(`The ${event.code} key was not found.`));
    });
    test.each(Events.Valid)("Testing something valid.", (event: KeyboardEvent, key: Key): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.translit(event)).toEqual(key);
    });
});
