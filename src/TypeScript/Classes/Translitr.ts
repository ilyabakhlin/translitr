import {Keys} from "../Objects/Keys";
import {Semicolon} from "../Objects/Semicolon";
import {Key} from "../Types/Key";
import {Language} from "../Types/Key/Language";

export class Translitr
{
    /**
     * @param {KeyboardEvent} event
     * @return {Key}
     */
    public detectKey(event: KeyboardEvent): Key | undefined
    {
        switch (true) {
            case /^Semicolon$/.test(event.code):
                return Semicolon;
            default:
                return this.getKey(event.code);
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
        const key: Key | undefined = this.detectKey(event);
        const language: Language | undefined = this.detectLanguages(key, languages);
        if (typeof language === "undefined") {
            throw Error("The language constant is undefined.");
        } else {
            event.preventDefault();
            return language.character;
        }
    }
}
