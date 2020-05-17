const colourCodeObjectToCSS = (colourCodeObject) => {
    const cssString = `hsl(${colourCodeObject.hue},
            ${colourCodeObject.saturation}%,
            ${colourCodeObject.lightness}%)
            `;
    return cssString;
};

export default colourCodeObjectToCSS;
