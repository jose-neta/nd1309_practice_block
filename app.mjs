import { Block } from "./block.mjs";

const block = new Block("Test Block");

block
  .generateHash()
  .then((result) => {
    console.log(`Block Hash: ${result.hash}`);
    console.log(`Block: ${JSON.stringify(result)}`);
  })
  .catch((error) => {
    console.log(error);
  });
