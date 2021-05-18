const {EventEmitter} = require('ecent');

const myEventEmitter = new EventEmitter();

//Fungsi yang akan dijalankan ketika evnet coffee-order terjadi
const makecoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat !`);
};

//mendaftarkan fungsi makecoffe sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makecoffee);