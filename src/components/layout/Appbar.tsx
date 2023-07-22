import { XStack, YStack, Avatar, H4, Text, Switch } from 'tamagui'
import { Sun, Moon } from '@tamagui/lucide-icons'
import { useWalletConnectModal } from '@walletconnect/modal-react-native'
import { useThemeContext } from '../../providers';

export function Appbar() {
  const { address } = useWalletConnectModal();
  const { theme, setTheme } = useThemeContext();

  return (
    <XStack style={{ width: "100%" }} p="$2" ai="center" jc="space-between">
      <XStack ai="center">
        <Avatar size="$5" circular>
          <Avatar.Image source={{ uri: 'https://avatars.githubusercontent.com/u/4060187?v=4' }} />
          <Avatar.Fallback backgroundColor="$gray5" />
        </Avatar>
        <YStack ml="$2">
          <Text color="$gray10">XChange</Text>
          <H4 fontWeight="bold" mt="$-2">{address?.slice(0, 5)}...{address?.slice(-4)}</H4>
        </YStack>
      </XStack>
      <XStack ai="center" space="$2">
        <Sun />
        <Switch
          size="$2"
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        >
          <Switch.Thumb animation="bouncy" />
        </Switch>
        <Moon />
      </XStack>
    </XStack>
  )
}
