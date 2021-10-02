import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
// import Card from "./src/containers/card/card";
import { Card, Text, Button,SearchBar } from "react-native-elements";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [producto, setProducto] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=redragon"
    );
    const response = await data.json();
    setProducto(response.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {console.log(producto[0])}
      <StatusBar style="dark" backgroundColor="yellow" hidden={false} translucent={false} />
          <View style={styles.container} >
            <Text  >hola</Text>

          </View>
          <View style={styles.container}>
          <FlatList
            data={producto}
            renderItem={(item) => {
              return (
                <Card>
                  <Card.Title>{item.item.title}</Card.Title>
                  <Card.Divider />
                  <Card.Image
                    source={{ uri: `${item.item.thumbnail}` }}
                    resizeMode="contain"></Card.Image>
                  <Button
                    title="Outline button"
                    type="outline" 
                    title="Ver publicacion" 
                    titleStyle={{ color: 'green' }}
                    />
                  <Text>{`${item.item.title}`}</Text>
                </Card>
              );
            }}
          />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: "15%",
    // flexDirection: "row",
    // flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
