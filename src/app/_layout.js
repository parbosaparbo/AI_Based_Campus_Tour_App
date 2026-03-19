import "../../global.css";   // REQUIRED for NativeWind v4
import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack 
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
