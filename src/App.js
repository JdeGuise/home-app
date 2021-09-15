import logo from './logo.svg';
import './App.css';
import Fitly from './Fitly.js';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text> Home </Text>
      <Button
        title="Go to Fitly"
        onPress={() => navigation.navigate('Fitly')}
      />
    </View>
  );
}

function FitlyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text> Fitly </Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Fitly/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeApp' }}/>
        <Stack.Screen name="Fitly" component={FitlyScreen} options={{ title: 'Fitly' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
