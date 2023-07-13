import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './pages/welcome';
import Results from './pages/results';
import Quiz from './pages/quiz';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome"> 
            <Stack.Screen name="Welcome" component={Welcome} 
            options={{ headerShown: false, }} />
            <Stack.Screen name="Home" component={Quiz} 
            options={{
                title: 'Quiz',
                headerStyle: {
                backgroundColor: '#EDA276',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                }, }}/>
            <Stack.Screen name="Result" component={Results} 
            options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
