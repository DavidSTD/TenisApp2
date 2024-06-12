import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import TenisOverviewScreen from './screens/TenisOverviewScreen';
import TeniDetailScree from './screens/TeniDetailScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: { backgroundColor: '#EE2A00'},
              headerTintColor: 'black',
              contentStyle: { backgroundColor: 'EE2A00'}
          }}
        >
          <Stack.Screen 
            name="Tenis" 
            component={CategoriesScreen}
          />
          <Stack.Screen 
              name="TenisOverview" 
              component={TenisOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'yellow',
              contentStyle: { backgroundColor: 'EE2A00'}
            }} 
          />
          <Stack.Screen 
            name="TeniDetail" 
            component={TeniDetailScree} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
