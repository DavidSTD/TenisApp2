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
              headerStyle: { backgroundColor: '#987070'},
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#F1E5D1'}
          }}
        >
          <Stack.Screen 
            name="TenisCategories" 
            component={CategoriesScreen}
          />
          <Stack.Screen 
            name="TenisOverview" 
            component={TenisOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#C39898'}
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
