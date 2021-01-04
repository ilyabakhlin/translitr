import {Translitr} from "../src/TypeScript/Classes/Translitr";
import {Key} from "../src/TypeScript/Interfaces/Key";
import {Character} from "../src/TypeScript/Interfaces/Keys/Character";
import {Digit} from "../src/TypeScript/Interfaces/Keys/Digit";
import {Events} from "./Objects/Events";
import {Layouts} from "./Objects/Layouts";
import {Letters} from "./Objects/Letters";
import {Modifiers} from "./Objects/Modifiers";
import {Numbers} from "./Objects/Numbers";

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
    test.each(Letters.Valid)("Testing the method values.", (code: string, letter: Character): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.getLetter(code)).toEqual(letter);
    });
});

describe("Testing the getNumber method.", (): void => {
    test.each(Numbers.Invalid)("Testing something.", (code: string): void => {
        const translitr: Translitr = new Translitr();
        expect((): Digit => translitr.getNumber(code)).toThrow(Error(`The ${code} key was not found.`));
    });
    test.each(Numbers.Valid)("Testing something.", (code: string, number: Digit): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.getNumber(code)).toEqual(number);
    });
});

describe("Testing the isModifier method.", (): void => {
    test.each(Modifiers.False)("Testing something.", (event: KeyboardEvent): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.isModifier(event)).toBeFalsy();
    });
    test.each(Modifiers.True)("Testing something.", (event: KeyboardEvent): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.isModifier(event)).toBeTruthy();
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

describe("Testing the translitLetter method.", (): void => {
    test.each(Events.InvalidLetters)("Testing something invalid.", (event: KeyboardEvent): void => {
        const translitr: Translitr = new Translitr();
        expect((): string => translitr.translitLetter(event)).toThrow(Error(`The ${event.code} key was not found.`));
    });
    test.each(Events.ValidLetters)("Testing something valid.", (event: KeyboardEvent, code: RegExp): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.translitLetter(event)).toMatch(code);
    });
});

describe("Testing the translitNumber method.", (): void => {
    test.each(Events.InvalidNumbers)("Testing something.", (event: KeyboardEvent): void => {
        const translitr: Translitr = new Translitr();
        expect((): string => translitr.translitNumber(event)).toThrow(Error(`The ${event.code} key was not found.`));
    });
    test.each(Events.ValidNumbers)("Testing something.", (event: KeyboardEvent, number: RegExp): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.translitNumber(event)).toMatch(number);
    });
});
