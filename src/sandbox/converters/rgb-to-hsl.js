/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 1] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {Object}  c       Object with {r, g, b} values
 * @return  {Object}          Object with {h, s, l} values
 */

function rgbToHsl(color) {
    let r = color.r, g = color.g, b = color.b;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = (l > 0.5) ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }
    
    // color["h"] = h;
    // color["s"] = s;
    // color["l"] = l;
    // return color;
    return {h, s, l};

}

export default rgbToHsl;