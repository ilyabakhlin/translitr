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
    const translitr: Translitr = new Translitr();
    const layout: HTMLSelectElement = getElementSelect("select#layout");
    layout.addEventListener("change", (): void => {
        translitr.setLayout(layout.options[layout.selectedIndex].value);
    });
    const text: HTMLTextAreaElement = getElementTextArea("textarea#text");
    text.addEventListener("keydown", (event: KeyboardEvent): void => {
        if (event.ctrlKey) {
            switch (true) {
                case /^KeyA$/.test(event.code):
                    text.select();
                    break;
                case /^KeyR$/.test(event.code):
                    window.location.reload();
                    break;
            }
        } else {
            const caretPosition: number = text.selectionStart;
            switch (true) {
                case /^Digit\d$/.test(event.code):
                    event.preventDefault();
                    text.value = `${text.value.slice(0, caretPosition)}${translitr.translitNumber(event)}${text.value.slice(caretPosition)}`;
                    text.selectionEnd = text.selectionStart = caretPosition + 1;
                    break;
                case /^Key\w$/.test(event.code):
                    event.preventDefault();
                    text.value = `${text.value.slice(0, caretPosition)}${translitr.translitLetter(event)}${text.value.slice(caretPosition)}`;
                    text.selectionEnd = text.selectionStart = caretPosition + 1;
                    break;
            }
        }
    });
});
