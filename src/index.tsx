import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { YStack, Button, XStack, useTheme } from 'tamagui'
import { Auctions } from './screens';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Auction } from './screens/Auction';

const Tab = createBottomTabNavigator();

export function App() {
  const { open, address } = useWalletConnectModal();
  const theme = useTheme();

  return (
    <NavigationContainer>
      {!address ? (
        <YStack jc={"center"} ai="center">
          <Button onPress={() => open()}>Connect Wallet</Button>
        </YStack>
      ) :
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarBackground: () => (
              <XStack style={[StyleSheet.absoluteFill]} bg="$backgroundHover" />
            ),
            tabBarActiveTintColor: theme.color.val,
          }}
          initialRouteName='Home'>
          <Tab.Screen
            name="Auctions"
            component={Auctions}
            options={{
              tabBarIcon: (props) => (
                <MaterialCommunityIcons name="shopping-outline" size={props.size} color={props.color} />
              ),
            }}
          />
          <Tab.Screen
            name="Inventory"
            component={Auction}
            options={{
              tabBarIcon: (props) => (
                <MaterialCommunityIcons name="folder-multiple-image" size={props.size} color={props.color} />
              ),
            }}
          />
          <Tab.Screen
            name="Mint"
            component={Auctions}
            options={{
              tabBarIcon: (props) => (
                <MaterialCommunityIcons name="pencil-outline" size={props.size} color={props.color} />
              ),
            }}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  )
}
