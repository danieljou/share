// const CryptoJS = require("crypto-js");
import CryptoJS from 'crypto-js';
export function encryptText(text, key) {
    // Convertir la clé en une instance de WordArray
    var keyBytes = CryptoJS.enc.Utf8.parse(key);

    // Convertir le texte en une instance de WordArray
    var textBytes = CryptoJS.enc.Utf8.parse(text);

    // Chiffrer le texte en utilisant AES
    var encrypted = CryptoJS.AES.encrypt(textBytes, keyBytes, {
        mode: CryptoJS.mode.ECB, // Mode de chiffrement
        padding: CryptoJS.pad.Pkcs7 // Remplissage
    });

    // Renvoyer le texte chiffré en format encodé en base64
    return encrypted.toString();
}