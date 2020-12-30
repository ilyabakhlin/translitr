import {Digits} from "../Objects/Digits";
import {Keys} from "../Objects/Keys";
import {Quote} from "../Objects/Quote";
import {Semicolon} from "../Objects/Semicolon";
import {Key} from "../Types/Key";
import {Language} from "../Types/Key/Language";

export class Translitr
{
    /**
     * @param {string} code
     * @return {Key | undefined}
     */
    public detectKey(code: string): Key | undefined
    {
        switch (true) {
            case /^Digit\d$/.test(code):
                return this.getDigit(code);
            case /^Key\w$/.test(code):
                return this.getKey(code);
            case /^Quote$/.test(code):
                return Quote;
            case /^Semicolon$/.test(code):
                return Semicolon;
            default:
                throw Error(`The key code ${code} is not supported.`);
        }
    }

    /**
     * @param {Key | undefined} key
     * @param {HTMLSelectElement} languages
     * @return {Language | undefined}
     */
    public detectLanguages(key: Key | undefined, languages: HTMLSelectElement): Language | undefined
    {
        const languageSelected: HTMLOptionElement = languages.options[languages.selectedIndex];
        if (typeof key === "undefined") {
            throw Error("The key constant is undefined.");
        } else {
            return key.languages.find((language: Language): Language => {
                if (language.code === languageSelected.value) {
                    return language;
                } else {
                    throw Error(`Couldn't find the ${language.code} language.`);
                }
            });
        }
    }

    /**
     * @param {string} code
     * @return {Key | undefined}
     */
    public getDigit(code: string): Key | undefined
    {
        return Digits.find((digit: Key): Key | undefined => {
            if (digit.code === code) {
                return digit;
            }
        });
    }

    /**
     * @param {string} code
     * @return {Key | undefined}
     */
    public getKey(code: string): Key | undefined
    {
        return Keys.find((key: Key): Key | undefined => {
            if (key.code === code) {
                return key;
            }
        });
    }

    /**
     * @param {KeyboardEvent} event
     * @param {HTMLSelectElement} languages
     * @return {string}
     */
    public translit(event: KeyboardEvent, languages: HTMLSelectElement): string
    {
        const key: Key | undefined = this.detectKey(event.code);
        const language: Language | undefined = this.detectLanguages(key, languages);
        if (typeof language === "undefined") {
            throw Error("The language constant is undefined.");
        } else {
            return language.character;
        }
    }
}
