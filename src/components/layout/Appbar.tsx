import { XStack, YStack, H4, Text, Switch } from 'tamagui'
import { Sun, Moon } from '@tamagui/lucide-icons'
import { useWalletConnectModal } from '@walletconnect/modal-react-native'
import { useThemeContext } from '../../providers';

export function Appbar() {
  const { address } = useWalletConnectModal();
  const { theme, setTheme } = useThemeContext();

  return (
    <XStack p="$3" ai="center" jc="space-between">
      <XStack ai="center">
        <YStack>
          <Text color="$gray10">{address?.slice(0, 5)}...{address?.slice(-4)}</Text>
          <H4 fontWeight="bold" mt="$-2" style={{ fontFamily: "SilkScreen" }}>reNFTaissance</H4>
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
