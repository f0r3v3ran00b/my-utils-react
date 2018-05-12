var moment = require('moment');

// Courtesy - https://gist.github.com/chris-rock/6cac4e422f29c28c9d88
// - Comments on the above page by skerit

const crypto = require("crypto");
const password = "whyisitsoidontno";
const secretMessage = "This is a top secret message!";
const algorithm = "aes-128-cbc";

const getRandomIV = () => {
    const ivBytes = crypto.randomBytes(16);
    const ivString = ivBytes.toString("base64");

    console.log(`ivString: ${ivString}`);
};

function encrypt(chunk) {
    var cipher, result, iv;

    // Create an iv
    iv = crypto.randomBytes(16);

    // Create a new cipher
    cipher = crypto.createCipheriv(algorithm, password, iv);

    // Create the new chunk
    result = Buffer.concat([iv, cipher.update(chunk), cipher.final()]);
    console.log(
        `Base64 encoded encrypted ivandbytes: ${result.toString("base64")}`
    );

    return result;
}

function decrypt(chunk) {
    var decipher, result, iv;

    // Get the iv: the first 16 bytes
    iv = chunk.slice(0, 16);

    // Get the rest
    chunk = chunk.slice(16);

    // Create a decipher
    decipher = crypto.createDecipheriv(algorithm, password, iv);

    // Actually decrypt it
    result = Buffer.concat([decipher.update(chunk), decipher.final()]);

    return result;
}

//getRandomIV();
let encrypted = encrypt(new Buffer(secretMessage, "utf8"));

let decrypted = decrypt(new Buffer(encrypted, "base64"));



exports.handler = function(event, context, callback) {
    const cipherText = encrypt(new Buffer(event.queryStringParameters.eValue, "utf8"));
    const clearText = decrypt(new Buffer(cipherText), "base64");
    callback(null, {
        statusCode: 200,
        body: `Moment is: ${moment().format()} : decrypted is: ${decrypted} + clearText: ${clearText}`
    })
}