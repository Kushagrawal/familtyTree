import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ScrollView
} from "react-native";
import PinchZoomView from "react-native-pinch-zoom-view";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import PersonCard from "./components/PersonCard";
import tempData from "./tempData";

export default class App extends React.Component {
  state = {
    addTodoVisible: false
  };

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <View style={{ marginVertical: 48 }}>
            <TouchableOpacity
              style={styles.addList}
              onPress={() => this.toggleAddTodoModal()}
            >
              <AntDesign name="plus" size={16} color={colors.blue} />
            </TouchableOpacity>
            <Text style={styles.add}>Add List</Text>
          </View>
          <TouchableOpacity onPress={() => this.toggleAddTodoModal()}>
            <View
              style={{
                backgroundColor: colors.blue,
                height: 300,
                width: 200,
                borderRadius: 50,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  paddingTop: 150,
                  fontWeight: "800",
                  fontSize: 10,
                  color: colors.white
                }}
              >
                Add List
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
        <Text style={styles.title}>
          Happy
          <Text style={{ fontWeight: "700", color: colors.blue }}> Family</Text>
        </Text>
        <PinchZoomView minScale={0.2}>
          <PersonCard tempData={tempData} currentNode={tempData[0]} />
        </PinchZoomView>
      </View>
    );
  }
}
``;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7FF"
  },
  divider: {
    backgroundColor: "grey",
    height: 4,
    width: 400,
    alignSelf: "center"
    // flex: 1
  },
  divider2: {
    marginTop: 26,
    backgroundColor: "grey",
    width: 4,
    height: 20,
    // flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64,
    marginBottom: 30,
    marginTop: 40,
    alignSelf: "center"
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  }
});
