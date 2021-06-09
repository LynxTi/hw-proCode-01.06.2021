const http = require('http');
const axios = require('axios');
const fs = require('fs');

// const urlImage = 'https://api.unsplash.com/photos/?client_id=AI9Z6b4uovrW7twNMh1Cw8dBn7C638AMQRIoieJIrxM'
const urlImage = 'http://wallpaperaccess.com/full/21593.jpg';



http.createServer((req,res) => {
    // res.setHeader("Content-Type", "text/txt");
    // res.setHeader("Content-Disposition", "attachment;filename=test.txt");

    const puhsImgClient = () => {
        const streamW = fs.createWriteStream('img.jpg');
            
        axios.get(urlImage, (rezalt) => {
            console.log(rezalt);
            rezalt.pipe(streamW);
        });
}
//         console.log(111111111111111111111);
//     http.get(urlImage, (rezalt) => {
//         // console.log(rezalt);
//         rezalt.pipe(streamW);
//     });
// }
puhsImgClient();
}).listen('8000');

