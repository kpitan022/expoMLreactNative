import React, { useCallback } from "react";
import { StyleSheet,  View } from "react-native";
// import styles from "./style";
// import Card from "./src/containers/card/card";
import { Card, Text, Button,SearchBar } from "react-native-elements";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';


export default function CardComponent({item}) {
  return (
    <Card>
      <Card.Title>{item.item.title}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{ uri: `${item.item.thumbnail}` }}
        resizeMode="contain"></Card.Image>
      <View
        backgroundColor='yellow'
        padding={20} >

        <Text>{`${item.item.title}`}</Text>
      </View>
      <Button
        title="Outline button"
        type="outline"
        title="Ver publicacion"
        titleStyle={{ color: '#F76B1C' }}
        href={item.item.permalink}
      />
    </Card>


  );
}
