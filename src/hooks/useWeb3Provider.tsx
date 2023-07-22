import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { ethers } from "ethers";
import { useMemo } from "react";

export function useWeb3Provider() {
  const { provider } = useWalletConnectModal();
  const web3Provider = useMemo(
    () => (provider ? new ethers.providers.Web3Provider(provider) : undefined),
    [provider],
  );
  return web3Provider;
}
