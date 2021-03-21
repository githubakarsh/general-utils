const html2canvas = require('html2canvas');


export const takeScreenShot = callback => {
    html2canvas(document.body, {
        background: 'white',
        scale: 0.5,
        logging: false,
        scrollX: 0,
        scrollY: 0
    }).then(canvas => callback(canvas.toDataURL('image/jpeg')));
};

