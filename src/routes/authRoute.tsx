import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from './authTypes';
import AuthScreen from '../screens/auth';


const Stack = createNativeStackNavigator<AuthRootStackParamList>();
const AuthRoute = () => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AuthScreen' component={AuthScreen} />
        </Stack.Navigator>
    );
};
export default AuthRoute;