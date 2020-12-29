import {Translitr} from "./Classes/Translitr";

/**
 * @param {string} query
 * @return {HTMLElement}
 */
function getElement(query: string): HTMLElement
{
    const element: HTMLElement | null = window.document.querySelector(query);
    if (element === null) {
        throw Error(); // TODO: Define an error message.
    } else {
        return element;
    }
}

/**
 * @param {string} query
 * @return {HTMLSelectElement}
 */
function getElementSelect(query: string): HTMLSelectElement
{
    const select: HTMLElement = getElement(query);
    if (select instanceof HTMLSelectElement) {
        return select;
    } else {
        throw Error(); // TODO: Define an error message.
    }
}

/**
 * @param {string} query
 * @return {HTMLTextAreaElement}
 */
function getElementTextArea(query: string): HTMLTextAreaElement
{
    const textArea: HTMLElement = getElement(query);
    if (textArea instanceof HTMLTextAreaElement) {
        return textArea;
    } else {
        throw Error(); // TODO: Define an error message.
    }
}

window.addEventListener("load", (): void => {
    const languages: HTMLSelectElement = getElementSelect("select#languages");
    const text: HTMLTextAreaElement = getElementTextArea("textarea#text");
    const translitr: Translitr = new Translitr();
    text.addEventListener("keydown", (event: KeyboardEvent): void => {
        const character: string = translitr.translit(event, languages);
        text.value = text.value + character;
        window.console.log(character);
    });
});
