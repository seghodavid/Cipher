const { encrypt, decrypt } = require('./Cipher');

const data = [{id: 1}, {id: 2}, {id: 3}, {id:4}]
const hash = encrypt(JSON.stringify(data));

console.log(hash);

// {
//     iv: '237f306841bd23a418878792252ff6c8',
//     content: 'e2da5c6073dd978991d8c7cd'
// }

const text = decrypt(hash);

console.log(text); // Hello World!