import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CardComponent from "./src/containers/card/card";
import { Card, Text, Button,SearchBar,Input } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
            // Button Linear Gradient
            colors={['#FAD961',  '#F76B1C']}>
      <StatusBar style="dark" backgroundColor='#FAD961' hidden={false} translucent={false} />
        
          <View style={styles.container} >
            <Text h2 >Buscador de ML</Text>
            <Input
              placeholder='Buscar'
            />
          </View>
          
          <View >
          <FlatList
            data={producto}
            renderItem={(item) => {
              return (
                <CardComponent item={item}/>
                  );
            }}
          />
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: "15%",
    // flexDirection: "row",
    // flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
