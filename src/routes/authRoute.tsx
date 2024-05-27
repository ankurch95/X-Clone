import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from './authTypes';
import AuthScreen from '../screens/auth';
import RegistrationScreen from '../screens/auth/registrationScreen';
import ForgotPasswordScreen from '../screens/auth/forgotPasswordScreen';


const Stack = createNativeStackNavigator<AuthRootStackParamList>();
const AuthRoute = () => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AuthScreen' component={AuthScreen} />
            <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
};
export default AuthRoute;