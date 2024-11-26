const { Keypair } = require('@solana/web3.js');

// Create a new keypair (wallet)
const userWallet = Keypair.generate();
console.log('GCneYopwixfErvaWiTpH8xHpnb5s8y5fRLu8MFfouYh8:', userWallet.publicKey.toBase58());
