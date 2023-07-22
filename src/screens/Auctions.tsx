import { YStack, XStack, H2 } from 'tamagui'
import { AuctionCard } from "../components/"
import dayjs from 'dayjs'
import { BaseScreen } from '../components/layout/BaseScreen'
import { useMarketplace, useNft, useWeb3Provider } from '../hooks';
import { useEffect } from 'react';

const TEMP = {
  title: "Auction 1",
  img: "https://www.nicepng.com/png/detail/965-9651318_download-10-selected-gold-coins-png-images-with.png",
}

export function Auctions({ navigation }: any) {
  const handleNavigate = () => navigation.navigate('Single Auction')
  const web3 = useWeb3Provider();

  useEffect(() => {
    console.log("hey")
    if (web3) {
      web3.getSigner().getAddress().then(console.log);
      web3.getSigner().getTransactionCount().then(console.log);
      console.log(web3.getSigner());
      web3.getNetwork().then(console.log)
      console.log("ho")
      web3.getGasPrice().then(console.log)
      web3.getCode("0x91b9453c41745192f4504Bc62307859a83C4D57B").then(console.log)
    }
  }, [web3])
  /*
  const nft = useNft();
  const marketplace = useMarketplace();
  useEffect(() => {
    if (nft) {
      const getAuctions = async () => {
        console.log("started nft")
        const tx = nft.name();
        console.log(tx, "nft")
        console.log(await tx)
      }
      getAuctions()
    }
  }, [nft])
  useEffect(() => {
    if (marketplace) {
      const getAuctions = async () => {
        console.log("started marketplace", marketplace)
        const tx = marketplace.getListedNfts();
        console.log(tx, "marketplace")
        console.log(await tx)
      }
      getAuctions()
    }
  }, [marketplace])
  */
  return (
    <BaseScreen>
      <YStack
        mt="$3"
        bg="$backgroundStrong"
        padding="$3"
        style={{ width: "100%" }}
      >
        <H2 style={{ fontFamily: "SilkScreen" }}>Running Auctions</H2>
        <XStack
          space="$4"
          mt="$4"
        >
          {[...Array(2).keys()].map((i) => (
            <AuctionCard
              key={i}
              title={TEMP.title}
              startDate={dayjs().subtract(1, "day").toDate()}
              endDate={dayjs().add(2, "day").toDate()}
              img={TEMP.img}
              currentBid={5.12}
              style={{ flexGrow: 1 }}
              onPress={handleNavigate}
            />
          ))}
        </XStack>
        <H2 style={{ fontFamily: "SilkScreen" }} mt="$4">Starting Soon</H2>
        {[...Array(2).keys()].map((i) => (
          <XStack
            space="$4"
            mt="$4"
            key={i}
          >
            {[...Array(2).keys()].map((i) => (
              <AuctionCard
                key={i}
                title={TEMP.title}
                startDate={dayjs().add(1, "day").toDate()}
                endDate={dayjs().add(2, "day").toDate()}
                img={TEMP.img}
                style={{ flexGrow: 1 }}
                animation={undefined}
                pressStyle={undefined}
              />
            ))}
          </XStack>
        ))}
      </YStack>
    </BaseScreen>
  )
}
