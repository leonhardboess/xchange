import { XStack, Paragraph, Card, CardProps, H3, Button, Image } from 'tamagui'

interface AuctionCardProps extends CardProps {
  title: string;
  startDate: Date;
  endDate: Date;
  img: string;
}

export function AuctionCard({ title, startDate, img, ...props }: AuctionCardProps) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      pressStyle={{ scale: 0.925 }}
      animation="bouncy"
      {...props}
    >
      <Card.Header padded>
        <H3>{title}</H3>
        <Paragraph theme="alt2">Now available</Paragraph>
      </Card.Header>
      <Image
        resizeMode='contain'
        alignSelf='center'
        source={{
          width: 100,
          height: 100,
          uri: img
        }}
      />
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Start Bidding</Button>
      </Card.Footer>
    </Card>
  )

}
