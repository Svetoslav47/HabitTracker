import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout() {
	return (
		<AuthProvider>
			<Stack>
				<Stack.Screen name="index" options={{
					headerShown: false,
					statusBarTranslucent: false
				}} />
				<Stack.Screen name="auth" options={{
					headerShown: false,
					statusBarTranslucent: false
				}} />
			</Stack>
		</AuthProvider>
	);
}
