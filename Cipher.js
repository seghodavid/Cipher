const crypto = require('crypto');
const CryptoJS = require('crypto-js')

const algorithm = 'aes-256-ctr';
const secretKey = 'daviddivineseghosimheseghosimhed';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

module.exports = {
    encrypt,
    decrypt
};


// Another way to decrypt and encrypt, you have to install and require crypto-js for this
//encrypt
// const ciphertext = CryptoJS.AES.encrypt("Hello World","david segho 123").toString();

// //decrypt
//  const bytes = CryptoJS.AES.decrypt(ciphertext,"david segho 123");
//  const original = bytes.toString(CryptoJS.enc.Utf8);

//  console.log(original);