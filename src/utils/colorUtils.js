export const getHexColorCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.floor(Math.random() * rgb);
    const hexCode = random.toString(16);
    return `#${hexCode.padStart(6, "0")}`;
}