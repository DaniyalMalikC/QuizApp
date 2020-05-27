import JSEncrypt from "./../bin/jsencrypt";
import encrypted from "./encrypt";

var privkey =
  "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB-----END PUBLIC KEY-----";

// Decrypt with the private key...
var decrypt = new JSEncrypt();
decrypt.setPrivateKey(privkey);
var uncrypted = decrypt.decrypt(encrypted);

console.log(uncrypted);

// Now a simple check to see if the round-trip worked.
if (uncrypted == "Daniyal") {
  alert("It works!!!");
} else {
  alert("Something went wrong....");
}
