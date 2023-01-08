const colourObjectToCSS = (colourCodeObject) => {
    const cssString = `hsl(${colourCodeObject.hue} ${colourCodeObject.saturation}% ${colourCodeObject.lightness}%)`;
    return cssString;
};

export default colourObjectToCSS;
