import { ThemedText, ThemedView, ThemedInput, ThemedCheckbox } from "@/components";
import { StyleSheet } from "react-native";

export default function LoginPage(){
    return (
        <ThemedView style={styles.container} viewColor="background">
            <ThemedView style={styles.formContainer} viewColor="secondary">
                <ThemedText type="title">Login</ThemedText>
                <ThemedInput label="Email" placeHolder="Enter your email"/>
                <ThemedInput label="Password" placeHolder="Enter your email" secret />
                <ThemedCheckbox label="Remember me" viewType="border" />
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    formContainer: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    textEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
});