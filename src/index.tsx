import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { YStack, Button, XStack, useTheme } from 'tamagui'
import { Auctions } from './screens';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

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
                <MaterialCommunityIcons name="scan-helper" size={props.size} color={props.color} />
              ),
            }}
          />
          <Tab.Screen
            name="Inventory"
            component={Auctions}
            options={{
              tabBarIcon: (props) => (
                <MaterialCommunityIcons name="scan-helper" size={props.size} color={props.color} />
              ),
            }}
          />
          <Tab.Screen
            name="Mint"
            component={Auctions}
            options={{
              tabBarIcon: (props) => (
                <MaterialCommunityIcons name="scan-helper" size={props.size} color={props.color} />
              ),
            }}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  )
}
