const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

//Fungsi yang akan dijalankan ketika evnet coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat !`);
};

const makeBill = ({ price }) => {
    console.log(`Bill anda sebesar ${price} telah dibuat!`);
}
//mendaftarkan fungsi makecoffe sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

myEventEmitter.emit('coffee-order', {name : 'Tubruk', price : 15000});