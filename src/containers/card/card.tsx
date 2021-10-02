import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, Button } from "react-native-elements";

export default function CardComponent({ item }) {
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
