import { tokenCache } from "@clerk/expo/token-cache";
import { Stack } from "../../.expo/types/router";
import "../../global.css";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
