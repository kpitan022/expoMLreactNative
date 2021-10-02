import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./style";

export default function Card() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>card1</Text>
      <Text style={styles.text}>card2</Text>
    </View>
  );
}
