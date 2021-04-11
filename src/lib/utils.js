// Random Integer
export function randomInteger(min, max) {
    /**
     * Returns a random integer between two numbers
     * Min is inclusive
     * Max is exclusive
     */
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}