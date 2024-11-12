import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function LoginPage(){
    return (
        <ThemedView viewType="background">
            <ThemedText>
                login
            </ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
});