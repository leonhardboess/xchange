import { NavigationContainer } from '@react-navigation/native';
import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { YStack, Button } from 'tamagui'
import { Auctions } from './screens';
import { Auction } from './screens/Auction';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function App() {
  const { open, address } = useWalletConnectModal();

  return (
    <NavigationContainer>
      {!address ? (
        <YStack jc={"center"} ai="center">
          <Button onPress={() => open()}>Connect Wallet</Button>
        </YStack>
      ) :
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName='Home'>
          <Stack.Screen
            name="Auctions"
            component={Auctions}
          />
          <Stack.Screen
            name="Single Auction"
            component={Auction}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  )
}
