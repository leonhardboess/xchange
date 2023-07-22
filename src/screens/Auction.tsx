import { Card, H2, Image, XStack, YStack, Paragraph, H4, H3, YGroup, ListItem, Separator } from "tamagui";
import { BaseScreen } from "../components/layout/BaseScreen";
import { Countdown } from '../components';
import dayjs from "dayjs";

const startDate = dayjs().add(1, "day").toDate();
const endDate = dayjs().add(2, "day").toDate();
export function Auction() {
  const started = dayjs().isAfter(startDate)
  const ended = dayjs().isAfter(endDate)
  return (
    <BaseScreen>
      <YStack
        mt="$3"
        bg="$backgroundStrong"
        padding="$3"
        style={{ width: "100%" }}
      >
        <Card padded>
          <Card.Header mb="$4">
            <XStack px="$2" py="$1" backgroundColor="$backgroundFocus" borderRadius="$2" >
              {!ended &&
                <XStack ai="center" jc="space-between" flexGrow={1}>
                  <H4 theme="alt2" textAlign="center">{started ? "Ends In" : "Starts In"}:</H4>
                  <H4 theme="alt2" textAlign="center"><Countdown endTime={startDate} /></H4>
                </XStack>
              }
              {ended && <Paragraph theme="alt2" textAlign="center">Auction has ended</Paragraph>}
            </XStack>
          </Card.Header>
          <Image
            resizeMode="contain"
            alignSelf="center"
            source={{
              width: 300,
              height: 300,
              uri: "https://www.nicepng.com/png/detail/965-9651318_download-10-selected-gold-coins-png-images-with.png"
            }}
          />
        </Card>
        <H2 mt="$4" style={{ fontFamily: "SilkScreen" }}>Auction 1</H2>
        <XStack>
          <H3>Highest bid: </H3>
          <H3 theme="alt2" style={{ fontFamily: "SilkScreen" }} ml="$4">12.032 ETH</H3>
        </XStack>
        <H4 my="$3">Bids:</H4>
        <YGroup separator={<Separator />}>
          <YGroup.Item>
            <ListItem>
              <XStack ai="center" jc="space-between" flexGrow={1}>
                <H4 theme="alt2" textAlign="center">12.032 ETH</H4>
                <H4 theme="alt2" textAlign="center">0x123...456</H4>
              </XStack>
            </ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem>
              <XStack ai="center" jc="space-between" flexGrow={1}>
                <H4 theme="alt2" textAlign="center">12.032 ETH</H4>
                <H4 theme="alt2" textAlign="center">0x123...456</H4>
              </XStack>
            </ListItem>
          </YGroup.Item>
        </YGroup>
      </YStack>
    </BaseScreen>
  )
}
