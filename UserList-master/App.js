import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListUserScreen from './components/ListUserScreen';
import DatailsUserScreen from './components/DatailsUserScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaProduto'>
        <Stack.Screen name="ListUser" component={ListUserScreen} />
        <Stack.Screen name='DetailsUser' component={DatailsUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;