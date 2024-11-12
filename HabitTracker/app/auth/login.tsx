import { ThemedText, ThemedView, ThemedInput, ThemedCheckbox, ThemedButton } from "@/components";
import { StyleSheet } from "react-native";


export default function LoginPage(){
    return (
        <ThemedView style={styles.container} viewColor="background">
            <ThemedView style={styles.formContainer} viewColor="secondary">
                <ThemedText type="title">Login</ThemedText>
                <ThemedView style={styles.inputContainer} viewColor="transparent" >
                    <ThemedInput label="Email" placeHolder="Enter your email"/>
                    <ThemedInput label="Password" placeHolder="Enter your email" secret />
                    <ThemedCheckbox label="Remember me" viewType="border" />
                </ThemedView>
                <ThemedButton text="Login"  icon="login" iconSize={18}/>
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
    inputContainer: {
        width: '100%',
        marginTop: 20,
        alignItems: "flex-start",
        gap: 10,
        paddingHorizontal: 15,
    },
    textEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

});