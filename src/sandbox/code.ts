import rgbToHsl from './converters/rgb-to-hsl';
import hslToRgb from './converters/hsl-to-rgb';
import rgbToHsb from './converters/rgb-to-hsb';
import clone from './clone';


let color = clone(figma.currentPage.selection[0].fills[0].color);
let hsl = rgbToHsl(color);
let rgb = hslToRgb(hsl);
let hsb = rgbToHsb(color);

figma.showUI(__html__, {width: 300, height: 500});
colorMessage(color, rgb, hsl, hsb);

// figma.on("selectionchange", () => {
//     color = clone(figma.currentPage.selection[0].fills[0].color);
//     hsl = rgbToHsl(color);
//     rgb = hslToRgb(hsl);
//     hsb = rgbToHsb(color);
//     colorMessage(color, rgb, hsl, hsb);
// });

function colorMessage(color, rgb, hsl, hsb) {
    figma.ui.postMessage({
        type: 'colorMessage',
        color: color,
        rgb: rgb,
        hsl: hsl,
        hsb: hsb
    });
}