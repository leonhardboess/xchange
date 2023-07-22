import { SafeAreaView, ScrollView } from 'react-native'
import { YStack, XStack, H2 } from 'tamagui'
import { AuctionCard } from "../components/"
import { Appbar } from '../components/layout'

export function Auctions() {
  return (
    <YStack f={1} ai="center" bg="$backgroundStrong">
      <SafeAreaView>
        <Appbar />
        <ScrollView>
          <YStack mt="$3"
            padding="$3">
            <H2>Running Auctions</H2>
            <XStack
              space="$4"
            >
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
            </XStack>
            <H2 mt="$4">Starting Soon</H2>
            <XStack
              space="$4"
            >
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
            </XStack>
            <XStack
              space="$4"
              padding="$3"
            >
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
            </XStack>
            <XStack
              space="$4"
              padding="$3"
            >
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
              <AuctionCard
                title="Auction 1"
                startDate={new Date()}
                endDate={new Date()}
                img="https://upload.wikimedia.org/wikipedia/commons/0/01/1909_Indian_Cent_NGC_MS65RD_Reverse.png"
                style={{ flexGrow: 1 }}
              />
            </XStack>
          </YStack>
        </ScrollView>
      </SafeAreaView>
    </YStack>
  )
}
