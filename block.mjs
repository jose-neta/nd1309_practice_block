import "crypto-js/sha256.js";

class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  generateHash() {
    let self = this;

    self.hash = "123";

    return Promise.resolve(self);
  }
}

export { Block };
