import { ethers } from 'ethers';

const contractAddress = '0x123...'; 
const contractAbi = [];
const provider = new ethers.providers.Web3Provider(window.ethereum); 

export async function claimAirdrop(address) {
  if (!ethers.utils.isAddress(address)) {
    throw new Error('Invalid Ethereum address');
  }
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  try {
    const tx = await contract.claim();
    await tx.wait();
    return 'Airdrop claimed successfully!';
  } catch (error) {
    return 'Failed to claim airdrop: ' + error.message;
  }
}
