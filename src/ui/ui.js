// import React from 'react';
// import ReactDOM from 'react-dom';

// Event handler
onmessage = event => {
    let message = event.data.pluginMessage;
    console.log("I got", message);
    if (message.type == "colorMessage") {
        console.log('COL:', message.color);
        console.log('HSL:', message.hsl);
        console.log('RGB:', message.rgb);
        console.log('HSB:', message.hsb);
        document.getElementById('root').innerHTML = 
            '<p><b>COL</b><br>R ' + 
                message.color.r + ' | ' + Math.round(message.color.r * 255) + '<br>G ' +
                message.color.g + ' | ' + Math.round(message.color.g * 255) + '<br>B ' +
                message.color.b + ' | ' + Math.round(message.color.b * 255) + '</p>' +
            '<p><b>RGB (reconverted)</b><br>R ' + 
                message.rgb.r + ' | ' + Math.round(message.rgb.r * 255) + '<br>G ' +
                message.rgb.g + ' | ' + Math.round(message.rgb.g * 255) + '<br>B ' +
                message.rgb.b + ' | ' + Math.round(message.rgb.b * 255) + '</p>' +
            '<p><b>HSL</b><br>H ' +
                message.hsl.h + ' | ' + Math.round(message.hsl.h * 360) + '<br>S ' + 
                message.hsl.s + ' | ' + Math.round(message.hsl.s * 100) + '<br>L ' +
                message.hsl.l + ' | ' + Math.round(message.hsl.l * 100) + '</p>' +
            '<p><b>HSB</b><br>H ' +
                message.hsb.h + ' | ' + Math.round(message.hsb.h * 360) + '<br>S ' +
                message.hsb.s + ' | ' + Math.round(message.hsb.s * 100) + '<br>B ' +
                message.hsb.v + ' | ' + Math.round(message.hsb.v * 100) + '</p>';
    }
};