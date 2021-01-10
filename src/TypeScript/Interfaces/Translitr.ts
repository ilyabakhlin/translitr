export interface Translitr
{
    /**
     * @return {string}
     */
    getLayout(): string;

    /**
     * @param {string} layout
     * @return {string}
     */
    setLayout(layout: string): string;
}
