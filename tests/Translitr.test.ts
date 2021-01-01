import {Translitr} from "../src/TypeScript/Classes/Translitr";

type LanguageAvailable = [string, RegExp];
type LanguageUnavailable = [string];
const languagesAvailable: LanguageAvailable[] = [
    ["en-US", /^en-US$/],
    ["es-ES", /^es-ES$/],
    ["ru-RU", /^ru-RU$/],
];
const languagesUnavailable: LanguageUnavailable[] = [
    ["en-us"],
    ["es-Es"],
    ["ru"],
];
describe("Testing the Translitr Class", (): void => {
    test.each(languagesAvailable)("Testing the getLanguage method.", (given: string, expected: RegExp): void => {
        const translitr: Translitr = new Translitr();
        translitr.setLanguage(given);
        expect(translitr.getLanguage()).toMatch(expected);
    });
    test("Testing the getLanguage method's default value.", (): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.getLanguage()).toMatch(/^en-US$/);
    });
    test.each(languagesAvailable)("Testing the setLanguage method.", (given: string, expected: RegExp): void => {
        const translitr: Translitr = new Translitr();
        expect(translitr.setLanguage(given)).toMatch(expected);
    });
    test.each(languagesUnavailable)("Testing the setLanguages method's error", (given: string): void => {
        const translitr: Translitr = new Translitr();
        expect((): string => translitr.setLanguage(given)).toThrow(Error("The given argument for the language property is not valid."));
    });
});
