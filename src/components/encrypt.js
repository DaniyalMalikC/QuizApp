//Importing
import JSEncrypt from "./../bin/jsencrypt";

//Public Key
var pubkey =
  "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB-----END PUBLIC KEY-----";

//Taking Input User Name
var input = prompt("Please enter your name", "User Name");

// Encrypt with the public key...
var encrypt = new JSEncrypt();
encrypt.setPublicKey(pubkey);
var encrypted = encrypt.encrypt(input);

//Showing Result on Console
console.log("Your Name Encrypted form -> " + encrypted);

//Export
export default encrypted;
