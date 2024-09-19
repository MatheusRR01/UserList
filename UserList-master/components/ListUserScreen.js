import React from 'react';
import { View, SafeAreaView, FlatList, StyleSheet, Image, StatusBar } from 'react-native';

import { Button, List } from 'react-native-paper'
import Users from '../data/Users'

export default props => {



  // Leitura do title
  const Item = ({ elemento: item }) => {
    return (
      <List.Item style={styles.item2}
        title={item.name}
        description={item.email}
        left={props => <Image {...props} style={styles.tinyLogo} source={{ uri: item.urlImagem }} />}
        onPress={() => props.navigation.navigate("DetailsUser", { id: item.id })}
      />
    )
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={Users}
        renderItem={({ item }) => <Item elemento={item} />} // Renderiza o componente
        keyExtractor={item => item.id} // identificar os elementos
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 90
  },
  item2: {
    borderWidth: 1,
    marginBottom: 4,
    backgroundColor: '#D3D3D3',
    borderRadius: 50,
  },
});