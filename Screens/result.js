import react from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Title from "../components/title";

const Result = ({ route, navigation }) => {
  const { score } = route.params;
  let resultPic;
  if (score > 40) {
    resultPic =
      "https://cdni.iconscout.com/illustration/premium/thumb/team-victory-5303612-4423551.png";
  } else {
    resultPic =
      "https://w0.peakpx.com/wallpaper/633/1018/HD-wallpaper-never-give-up-bts-samsung-never-give-up-black-dark-powe-iphone-hiphop-monster.jpg";
  }
  return (
    <View style={styles.container}>
      <Title titleText="Result" />
      <View>
        <Text style={styles.scoreStyle}>Your Score is: {score}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={{
            uri: resultPic,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start Over</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Result;
const styles = StyleSheet.create({
  banner: {
    height: "95%",
    width: "100%",
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 20,
    borderRadius: 60,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  scoreStyle: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "500",
  },
});
