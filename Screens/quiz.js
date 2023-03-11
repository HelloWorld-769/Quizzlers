import { useState, useEffect, React } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// issmein  ques  mein question ka array ja rha hai jismein question,incorrect ansewr etc hai...
const Quiz = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [ques, setques] = useState();
  const [option, setoption] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const getQuiz = async () => {
    setCount(0);
    setisLoading(true);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple&encode=url3986"
      );
      const data = await response.json();
      setques(data.results);
      setoption(generateOptions(data.results[0]));
    } catch (error) {
      console.log(error);
    }
    setisLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleSelectedOptions = (selectedOption) => {
    if (selectedOption == ques[count].correct_answer) {
      if(count === 2) {
        setScore(score+20);
      }
      else{
        setScore(score + 10);
      }
     
      console.log(score);
    }
    if (count !== 9) {
      setCount(count + 1);
      setoption(generateOptions(ques[count + 1]));
    }
    if (count === 9) {
      handleRes();
    }
  };
  const handleSkipPress = () => {
    setCount(count + 1);
    setoption(generateOptions(ques[count + 1]));
  };

  const generateOptions = (_ques) => {
    const options = [..._ques.incorrect_answers];
    options.push(..._ques.correct_answer.split());
    console.log(_ques.question);
    console.log(options);
    shuffleArray(options);
    console.log("AFTER SHUFLING ");
    console.log(options);
    return options;
  };
  const handleRes = () => {
    navigation.navigate("Result", { score });
  };
  return (
    <View style={styles.container}>
      {/* Question */}
      {/* Used ternary operator */}
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={100} color="#34A0A4" />
        </View>
      ) : (
        ques && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                {decodeURIComponent(ques[count].question)}
              </Text>
            </View>

            {/* Options */}

            {/* Option 1 */}
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOptions(option[0]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(option[0])}
                </Text>
              </TouchableOpacity>

              {/* Option 2 */}
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOptions(option[1]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(option[1])}
                </Text>
              </TouchableOpacity>

              {/* Option 3 */}
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOptions(option[2]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(option[2])}
                </Text>
              </TouchableOpacity>

              {/* Option 4 */}
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOptions(option[3]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(option[3])}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Buttons */}
            <View style={styles.bottom}>
              {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> */}

              {count !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSkipPress}
                >
                  <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
              )}

              {count === 9 && (
                <TouchableOpacity style={styles.button} onPress={handleRes}>
                  <Text style={styles.buttonText}>FINISH</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#168AAD",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 25,
    alignContent: "space-around",
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 21,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 32,
  },
  option: {
    fontSize: 27,
    fontWeight: "500",
    color: "white",
  },
  optionButton: {
    paddingVertical: 14,
    paddingLeft: 15,
    backgroundColor: "#52B69A",
    borderRadius: 20,
    marginVertical: 8,
  },
  parent: {
    height: "100%",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Quiz;
