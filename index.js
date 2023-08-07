import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([{
        message: "Type in your URL:",
        name: "URL",
    }])
    .then((answer) => {
        const url = answer.URL;
        // var qr_svg = qr.image('I love QR!', { type: 'svg' });
        // qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            
        }
        else {
            
        }
    })


