import './expo-crypto-shim.js'

import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { Paragraph, TamaguiProvider, Theme, YStack } from 'tamagui'
import { Text, TouchableOpacity } from 'react-native';
import { WalletConnectModal } from '@walletconnect/modal-react-native';

import config from './tamagui.config'

const projectId = 'd0f0274917ae60ae1b773f0c92cb587d';

const providerMetadata = {
  name: 'Amazing Auctions',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
};

export default function App() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor={'$backgroundSoft'}>
          <Paragraph color="$color" jc="center">
            {colorScheme}
          </Paragraph>
          <TouchableOpacity onPress={() => open()}>
            <Text>Open WalletConnect</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </YStack>
        <WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
      </Theme>
    </TamaguiProvider>
  );
}
