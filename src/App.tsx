

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../src/pages/home"
import TemplateDetails from "../src/pages/templateDetails"
import TemplatesList from "../src/pages/templatesList"


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#F29A4B',
        },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#F4F0EC' }

      }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="TemplatesList"
          component={TemplatesList}
          options={{ title: 'Folder sample', headerBackTitle: 'Home' }}
        />
        <Stack.Screen
          name="TemplateDetails"
          component={TemplateDetails}
          options={{ title: 'Template sample' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
