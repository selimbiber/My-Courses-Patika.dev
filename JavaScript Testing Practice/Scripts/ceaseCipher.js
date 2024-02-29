export default function caesarCipher(str, key) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
  const STRINGS = str.toLowerCase();
  let encryptedText = "";

  for (const STRING of STRINGS) {
    if (STRING !== " ") {
      const INDEX = ALPHABET.indexOf(STRING);
      encryptedText += ALPHABET[(INDEX + key) % 26];
    } else {
      encryptedText += " ";
    }
  }

  return encryptedText;
}
