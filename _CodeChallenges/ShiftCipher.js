class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
    }
  
    encrypt(plainText) {
      let encryptedText = '';
  
      for (let char of plainText) {
        if (char.match(/[a-zA-Z]/)) {
          let charCode = char.charCodeAt(0);
          let base = charCode >= 65 && charCode <= 90 ? 65 : 97;
          let newCharCode = ((charCode - base + this.shift) % 26) + base;
          encryptedText += String.fromCharCode(newCharCode).toUpperCase();
        } else {
          encryptedText += char;
        }
      }
  
      return encryptedText;
    }
  
    decrypt(encryptedText) {
      let decryptedText = '';
  
      for (let char of encryptedText) {
        if (char.match(/[a-zA-Z]/)) {
          let charCode = char.charCodeAt(0);
          let base = charCode >= 65 && charCode <= 90 ? 65 : 97;
          let newCharCode = ((charCode - base - this.shift + 26) % 26) + base;
          decryptedText += String.fromCharCode(newCharCode).toLowerCase();
        } else {
          decryptedText += char;
        }
      }
  
      return decryptedText;
    }
  }
  
  const cipher = new ShiftCipher(2);
  console.log(cipher.encrypt('I love to code!')); 
  console.log(cipher.decrypt('K <3 OA RWRRA'));  
  
