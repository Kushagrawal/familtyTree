import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";
import tempData from "../tempData";

export default class PersonCard extends Component {
  render() {
    const tempData = this.props.tempData;
    const currentNode = this.props.currentNode;
    return (
      <>
        <View
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <View>
            <View style={{ height: 90, alignSelf: "center" }}>
              <View
                style={[
                  styles.listContainer,
                  { backgroundColor: currentNode.color }
                ]}
              >
                <Image source={currentNode.avatar} style={styles.avatar} />
                <View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>
                      {currentNode.first_name} {currentNode.last_name}
                    </Text>
                    <Text style={styles.subtitle}>10-Jan-1990</Text>
                  </View>
                </View>
              </View>
            </View>
            {currentNode.children.length !== 0 && (
              <>
                <View style={[styles.divider2]} />
                <View style={[styles.divider]} />
              </>
            )}
          </View>
          <View
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            {currentNode.children.length !== 0 &&
              currentNode.children.map(child => (
                <>
                  <PersonCard
                    tempData={tempData}
                    currentNode={tempData.find(aa => {
                      if (aa.id === child.id) {
                        return aa;
                      }
                    })}
                    key={tempData.find(aa => {
                      if (aa.id === child.id) {
                        return aa.id;
                      }
                    })}
                  />
                </>
              ))}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 70
    // justifyContent: "center"
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center"
  },
  divider: {
    backgroundColor: "grey",
    height: 4,
    width: 10 * 10,
    alignSelf: "center"
    // flex: 1
  },
  divider2: {
    backgroundColor: "grey",
    width: 4,
    height: 20,
    alignSelf: "center",
    paddingBottom: 20,
    marginTop: 43
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64,
    marginBottom: 30
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
  },
  listContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    alignItems: "center",
    width: 110,
    marginLeft: 5,
    marginRight: 5
  },
  count: {
    paddingTop: 7,
    paddingBottom: 1,
    fontSize: 14,
    fontWeight: "700",
    color: colors.white
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "500",
    color: colors.white,
    fontStyle: "italic"
  }
});
