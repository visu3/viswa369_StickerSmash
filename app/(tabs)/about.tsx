import { Text, View, StyleSheet } from "react-native"


export default function AboutScreen() {
    return (

        < View style={styles.container} >
            <Text style={styles.text}>About Screen</Text>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
    }
})