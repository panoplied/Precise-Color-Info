/**
 * Converts an RGB color value to HSV(HSB).
 * Assumes r, g, and b are contained in the set [0, 1] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   {Object}  c       Object with {r, g, b} values
 * @return  {Object}          Object with {h, s, v} values
 */

function rgbToHsb(color) {
    let r = color.r, g = color.g, b = color.b;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);

    let h = 0, s = 0, v = max;

    let delMax = max - min;

    if (delMax != 0) {
        s = delMax / max;
        let delR = ((max - r) / 6 + (max / 2)) / delMax;
        let delG = ((max - g) / 6 + (max / 2)) / delMax;
        let delB = ((max - b) / 6 + (max / 2)) / delMax;

        if (r == max) {
            h = delB - delG;
        } else if (g == max) {
            h = 1/3 + delR - delB;
        } else if (b == max) {
            h = 2/3 + delG - delR;
        }

        console.log("DEBUG H", h);

        if (h < 0) {
            h += 1.0;
        }
        if (h > 1) {
            h -= 1.0;
        }
    }

    // color["h"] = h;
    // color["s"] = s;
    // color["b"] = b;
    // return color;
    return {h, s, v};

}

export default rgbToHsb;