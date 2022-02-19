const { CeloProvider, CeloWallet } = require("@celo-tools/celo-ethers-wrapper");
const { Contract, Wallet } = require("ethers");
const dotenv = require("dotenv");
dotenv.config();

var CONTRACT_INTERFACE = require("../build/contracts/HelloWorld.json");

const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
const wallet = Wallet.fromMnemonic(process.env.MNEMONIC);

async function main() {
  await provider.ready;

  const walletWithProvider = new CeloWallet(wallet.privateKey, provider);

  var contract = new Contract(
    "0xe6Af43EA05db26410eE054AD162162954E7848db",
    CONTRACT_INTERFACE,
    walletWithProvider
  );

  var setName = contract.functions["setName"];
  try {
    await setName("Truong Cong Thuong");
  } catch (error) {
    console.log(error);
  }
}

main();
