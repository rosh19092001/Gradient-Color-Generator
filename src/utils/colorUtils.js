// Generate a random hex color
export const getHexColorCode = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const toHex = (value) => value.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Convert hex to RGB
export const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
};

// Generate basic color name from RGB
const standardColors = {
    "Red": [255,0,0],
    "Green": [0,255,0],
    "Blue": [0,0,255],
    "Yellow": [255,255,0],
    "Cyan": [0,255,255],
    "Magenta": [255,0,255],
    "Black": [0,0,0],
    "White": [255,255,255],
    "Gray": [128,128,128],
    "Orange": [255,165,0],
    "Pink": [255,192,203],
    "Purple": [128,0,128],
    "Brown": [165,42,42]
};

export const rgbToName = ({ r, g, b }) => {
    let closestColor = "Unknown";
    let minDistance = Infinity;

    Object.entries(standardColors).forEach(([name, [sr, sg, sb]]) => {
        const distance = Math.sqrt((r-sr)**2 + (g-sg)**2 + (b-sb)**2);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = name;
        }
    });

    return closestColor;
};
