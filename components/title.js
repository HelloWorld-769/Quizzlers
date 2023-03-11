import react from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = (props) => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
               {props.titleText}
            </Text>
        </View>
    );
}
export default Title;
const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'600',
    },
    container:{
        paddingVertical:16,
        justifyContent:'center',
        alignItems:'center',
    }
})