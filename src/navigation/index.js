import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MasonryLayout from "../screens/MasonryLayout";
import Home from "../screens/Home";
import Button from "../screens/Button";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Masonry" component={MasonryLayout} />
        <Stack.Screen name="Button" component={Button} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
