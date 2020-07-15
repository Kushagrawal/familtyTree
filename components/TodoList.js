import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../Colors";

export default TodoList = ({ list }) => {
  const completedCount = list.todos.filter(todo => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Image source={list.avatar} style={styles.avatar} />
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>John Parker</Text>
          <Text style={styles.subtitle}>10-Jan-1990</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    width: 10,
    alignSelf: "center",
    paddingLeft: 10,
    marginLeft: 10
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center"
  },
  listContainer: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 6,
    alignItems: "center",
    width: 140
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginTop: 18
  },
  count: {
    paddingTop: 7,
    paddingBottom: 1,
    fontSize: 17,
    fontWeight: "700",
    color: colors.white
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.white,
    fontStyle: "italic"
  }
});
