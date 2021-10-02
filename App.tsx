import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CardComponent from "./src/containers/card/card";
import { Card, Text, Button, Icon, Input, } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  const [producto, setProducto] = useState([]);
  const [search, setSearch] = useState('');
  const [texto, setTexto] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${(search.length === 0) ? setSearch('') : search}`
    );
    const response = await data.json();
    setProducto(response.results);
  };

  useEffect(() => {
    fetchData();
  }, [search]);
  return (
    <>
      <LinearGradient
        // Button Linear Gradient
        colors={['#FAD961', '#F76B1C']}>
        <StatusBar style="dark" backgroundColor='#FAD961' hidden={false} translucent={false} />

        <View style={styles.container} >
          <Text h2 >Buscador de ML</Text>
          <View style={styles.search}>
            <Input
              placeholder='Buscar'
              onChangeText={text => setTexto(text)}
            />
            <Button
              onPress={text => setSearch(texto)}
              iconPosition="left"
              icon={{ name: 'search', color: 'gray' }}
              type="outline"
            />
          </View>
        </View>

        <View >
          <FlatList
            data={producto}
            renderItem={(item) => {
              return (
                <CardComponent item={item} />
              );
            }}
            refreshing={refreshing}
            onRefresh={async()=>{
              setRefreshing(true)
              await fetchData()
              setRefreshing(false)
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
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  search: {
    flexDirection: "row",
    width: '80%',
    alignItems: "center",
    justifyContent: "center",
  },
});
