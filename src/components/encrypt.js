import JSEncrypt from "./../bin/jsencrypt";

var pubkey =
  "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB-----END PUBLIC KEY-----";

var input = prompt("Please enter your name", "Harry Potter");

// Encrypt with the public key...
var encrypt = new JSEncrypt();
encrypt.setPublicKey(pubkey);
var encrypted = encrypt.encrypt(input);

console.log("Your Name Encrypted form -> " + encrypted);

export default encrypted;