import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import OnboardingScreen from './OnboardingScreen'
import Login from './Login';
import SignUp from './SignUp';
import DashBoard from './DashBoard';
import Settings from './Settings'
import Account from './Account'
import PasswordReset from './PasswordReset'
import PwdReseted from './PwdReseted'
import ExpenseEntryForm from './ExpenseEntryForm'
import EditInfo from './EditInfo'
import ExpenseLists from './ExpenseLists'
import Records from './Records'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordReset" component={PasswordReset}/>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="PwdReseted" component={PwdReseted}/>
        <Stack.Screen name="ExpenseEntryForm" component={ExpenseEntryForm}/>
        <Stack.Screen name="EditInfo" component={EditInfo}/>
        <Stack.Screen name="ExpenseLists" component={ExpenseLists}/>
        <Stack.Screen name='Records' component={Records}/>
        <Stack.Screen name='OnboardingScreen' component={OnboardingScreen}/>
      
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
