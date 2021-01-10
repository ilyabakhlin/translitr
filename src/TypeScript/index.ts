import {Translitr} from "./Classes/Translitr";
import {Translitr as TranslitrInterface} from "./Interfaces/Translitr";

/**
 * @param {string} query
 * @return {Element}
 */
function getElement(query: string): Element
{
    const element: Element | null = window.document.querySelector(query);
    if (element instanceof Element) {
        return element;
    } else {
        throw new Error(); // TODO: Define an error message.
    }
}

/**
 * @param {string} query
 * @return {HTMLSelectElement}
 */
function getElementSelect(query: string): HTMLSelectElement
{
    const select: Element = getElement(query);
    if (select instanceof HTMLSelectElement) {
        return select;
    } else {
        throw new Error(); // TODO: Define an error message.
    }
}

/**
 * @param {string} query
 * @return {HTMLTextAreaElement}
 */
function getElementTextArea(query: string): HTMLTextAreaElement
{
    const textArea: Element = getElement(query);
    if (textArea instanceof HTMLTextAreaElement) {
        return textArea;
    } else {
        throw new Error(); // TODO: Define an error message.
    }
}

window.addEventListener("load", (): void => {
    const content: HTMLTextAreaElement = getElementTextArea("textarea#content");
    const layouts: HTMLSelectElement = getElementSelect("select#layouts");
    const translitr: TranslitrInterface = new Translitr(layouts.options[layouts.selectedIndex].value);

    layouts.addEventListener("change", (): void => {
        translitr.layout = layouts.options[layouts.selectedIndex].value;
    });

    content.addEventListener("keydown", (event: KeyboardEvent): void => {
        event.preventDefault();
        window.console.log(event); // TODO: Remove this line.
        switch (event.code) {
            case "AltRight":
                translitr.altRight = true;
                break;
        }
    });

    content.addEventListener("keyup", (event: KeyboardEvent): void => {
        event.preventDefault();
        window.console.log(event); // TODO: Remove this line.
        switch (event.code) {
            case "AltRight":
                translitr.altRight = false;
                break;
        }
    });
});
