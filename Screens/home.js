import react from "react";
import { StyleSheet, View, Dimensions,Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import Title from "../components/title";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title titleText="Quizzler"/>
            <View style={styles.bannerContainer}>
                <ImageBackground
                    source={{
                        uri:"https://i.pinimg.com/736x/b9/ec/98/b9ec98be9295ec71c409334e5102adea.jpg",
                    }}
                    style={styles.banner}
                    resizeMode="contain"
                ></ImageBackground>
            </View>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Quiz")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Home;
const styles = StyleSheet.create({
    banner: {
        height:"100%",
        width:"100%",
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    button: {

        width: '100%',
        backgroundColor: '#1A759F',
        padding: 20,
        borderRadius: 60,
        alignItems: 'center',
        marginBottom: 40,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    },
});
