
const TakToken = require("../contracts/TakToken.json");
const NFTStaking = require("../contracts/NFTStaking.json");
const NFTMint = require("../contracts/NFTMint.json");
const TakTokenStaking = require("../contracts/TakTokenStaking.json");

export const CONTRACTS_TYPE = {
  TAKTOKEN: "TAKTOKEN",
  NFTSTAKING: "NFTSTAKING",
  NFTMINT: "NFTMINT",
  TAKTOKENSTAKE: "TAKTOKENSTAKE"
};

export const CONTRACTS = {

  [CONTRACTS_TYPE.TAKTOKEN]: {
    1: { address: '0xFDd7Ebc453535eD80E86F543ae6B9BA302eD0446', abi: TakToken},
    4: { address: "0xFDd7Ebc453535eD80E86F543ae6B9BA302eD0446", abi: TakToken},
    56: { address: '', abi: '' },
    97: { address: '0xFDd7Ebc453535eD80E86F543ae6B9BA302eD0446', abi: TakToken},
  },
  [CONTRACTS_TYPE.NFTSTAKING]: {
    1: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
    4: { address: "0x2D9A3804Bf88666B67424D301F0C5c815dc5438f", abi: NFTStaking},
    56: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: '' },
    97: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
  },
  [CONTRACTS_TYPE.NFTMINT]: {
    1: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
    4: { address: "0xdfdb171071ee8edd99e1435ce42308c5dc639d95", abi: NFTMint},
    56: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: '' },
    97: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
  },
  [CONTRACTS_TYPE.TAKTOKENSTAKE]: {
    1: { address: '0x8852d66155068a4f945cae3D1cC4e33E7874284b', abi: TakTokenStaking},
    4: { address: "0x8852d66155068a4f945cae3D1cC4e33E7874284b", abi: TakTokenStaking},
    56: { address: '0x8852d66155068a4f945cae3D1cC4e33E7874284b', abi: '' },
    97: { address: '0x8852d66155068a4f945cae3D1cC4e33E7874284b', abi: TakTokenStaking},
  },

  
  // [CONTRACTS_TYPE.TAKTOKEN]: {
  //   1: { address: '0xF25C6a0ce6174d89133c55d9908b0e10571861b8', abi: TakToken},
  //   4: { address: "0xF25C6a0ce6174d89133c55d9908b0e10571861b8", abi: TakToken},
  //   56: { address: '', abi: '' },
  //   97: { address: '0xF25C6a0ce6174d89133c55d9908b0e10571861b8', abi: TakToken},
  // },
  // [CONTRACTS_TYPE.NFTSTAKING]: {
  //   1: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
  //   4: { address: "0x2D9A3804Bf88666B67424D301F0C5c815dc5438f", abi: NFTStaking},
  //   56: { address: '', abi: '' },
  //   97: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
  // },
  // [CONTRACTS_TYPE.NFTMINT]: {
  //   1: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
  //   4: { address: "0xdfdb171071ee8edd99e1435ce42308c5dc639d95", abi: NFTMint},
  //   56: { address: '', abi: '' },
  //   97: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
  // },
  // [CONTRACTS_TYPE.TAKTOKENSTAKE]: {
  //   1: { address: '0xe9BaD25433500e02846eFCc5C30be20BFc401D96', abi: TakTokenStaking},
  //   4: { address: "0xe9BaD25433500e02846eFCc5C30be20BFc401D96", abi: TakTokenStaking},
  //   56: { address: '', abi: '' },
  //   97: { address: '0xe9BaD25433500e02846eFCc5C30be20BFc401D96', abi: TakTokenStaking},
  // },


};

