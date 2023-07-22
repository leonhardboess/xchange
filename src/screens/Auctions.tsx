import { YStack, XStack, H2 } from 'tamagui'
import { AuctionCard } from "../components/"
import dayjs from 'dayjs'
import { BaseScreen } from '../components/layout/BaseScreen'

const TEMP = {
  title: "Auction 1",
  img: "https://www.nicepng.com/png/detail/965-9651318_download-10-selected-gold-coins-png-images-with.png",
}

export function Auctions() {
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
              />
            ))}
          </XStack>
        ))}
      </YStack>
    </BaseScreen>
  )
}
