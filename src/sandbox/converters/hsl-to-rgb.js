/**
 * Converts properties in the received color object from HSL(a) to RGB(a).
 * @param       {Object} c      {h, s, l} 
 * @returns     {Object}        {r, g, b}
 */

function hslToRgb(color) {
    let h = color.h, s = color.s, l = color.l;

    // Check values for tresholds
    
    // Hue is looped, it represents a 360 degree color circle, so continue adding delta after treshold
    h = (h > 1) ? h % 1 : h;
    h = (h < 0) ? (1 + h % 1) : h;

    // Saturation and lightness are limited values, so cut them at treshold in range [0:1]
    s = (s > 1) ? 1 : s;
    s = (s < 0) ? 0 : s;
    l = (l > 1) ? 1 : l;
    l = (l < 0) ? 0 : l;


    let r, g, b;
    if (s == 0) {
        r = g = b = l;
    } else {
        function hueToRgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;

        r = hueToRgb(p, q, h + 1/3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1/3);
    }

    // color.r = r; color.g = g, color.b = b; 

    // return color;

    return {r, g, b};
}

export default hslToRgb;