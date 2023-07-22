import { ethers } from "ethers";
import { useMemo } from "react";
import { useWeb3Provider } from "./useWeb3Provider";
import ABI from "../../contracts/artnft.json";

const CONTRACT_ADDRESS = "0x94c99a6cDdBE711cF5b6679D1027fde0F56cBa7D"

export function useNft() {
  const web3 = useWeb3Provider();

  const contract = useMemo(() => {
    if (!web3) return;
    console.log(web3.getSigner(), "signer")
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      web3.getSigner()
    )
  }, [web3])

  return contract
}
