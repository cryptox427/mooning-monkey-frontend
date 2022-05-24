import { chainId, testBscChainId } from '../constants/chain';
import { ethers } from 'ethers';
import { BSC_TOKENS, BSC_TESTNET_TOKENS } from '../constants/tokens';

const useChainID = testBscChainId;
const useTokens = BSC_TESTNET_TOKENS;

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const chain = await window.ethereum.request({ method: 'eth_chainId' })
      if (chain === useChainID) {
        const addressArray = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Please Sign in/up now.",
          }
        } else {
          return {
            address: "",
            status: "😥 Connect your wallet account to the site.",
          }
        }
      } else {
        window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: useChainID }],
        })
        return {
          address: "",
          status: "😥 Connect your wallet account to the site.",
        }
      }
      
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser.(https://metamask.io/download.html)" 
    }
  }
}

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      const chain = await window.ethereum.request({
        method: "eth_chainId",
      })
      if (addressArray.length > 0 && chain === chainId) {
        return {
          address: addressArray[0],
          status: "👆🏽 Please Sign in/up now.",
        }
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask and choose the correct chain using the top right button.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser.(https://metamask.io/download.html)"
    }
  }
}

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return signer;
}

export const getTokenContract = (tokenName) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractABI = require("../constants/tokenABI.json");
  const contract = new ethers.Contract(useTokens[tokenName], contractABI, signer);

  return contract;
}

export const getBalance = async (address, tokenName) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  let balance;

  if (tokenName === 'BNB') {
    balance = await provider.getBalance(address);
  } else {
    const contractABI = require("../constants/tokenABI.json");
    const contract = new ethers.Contract(useTokens[tokenName], contractABI, signer);
    console.log("coin address", useTokens[tokenName])
    balance = await contract.balanceOf(address);
  }

  return ethers.utils.formatEther(balance);
}