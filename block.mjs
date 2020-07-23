import cryptojs from "crypto-js";
const { SHA256 } = cryptojs;

class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  generateHash() {
    let self = this;

    return new Promise((resolve, reject) => {
      self.hash = SHA256(JSON.stringify(self));
      resolve(self);
    });
  }
}

export { Block };
