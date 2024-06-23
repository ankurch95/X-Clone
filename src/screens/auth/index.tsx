import { Text, View,PermissionsAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper'
import style from './styles'
import { colors } from '../../theme/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../routes/authTypes'
import messaging from '@react-native-firebase/messaging';
import notifee,{AndroidImportance} from '@notifee/react-native';
import crashlytics from '@react-native-firebase/crashlytics';

type Props = NativeStackScreenProps<AuthRootStackParamList>
export default function AuthScreen({ navigation }: Props) {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true)

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }


  async function requestPermissions() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  
    await notifee.requestPermission();
  }


  async function createChannel() {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
  }

  // Get the FCM token
async function getFcmToken() {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('Your Firebase Cloud Messaging (FCM) token:', fcmToken);
    // Save the token to your server or any other logic you need
  } else {
    console.log('Failed to get FCM token');
  }
}

// Handle token refresh
function onTokenRefreshListener() {
  return messaging().onTokenRefresh(fcmToken => {
    console.log('New FCM token:', fcmToken);
    // Save the new token to your server or any other logic you need
  });
}

  
  // Initialize FCM token and listeners
async function initializeFirebase() {
  await requestPermissions();
  await getFcmToken();
  onTokenRefreshListener();
  createChannel()
}

  initializeFirebase();

  return (
    <View style={style.container}>
      <Text style={style.welcomeText}>Welcome Back,</Text>

      <View style={{ marginTop: 50 }}>
        <TextInput
          value={username}
          mode='outlined'
          label={'Username/Email'}
          keyboardType='email-address'
          onChangeText={(text) => setUsername(text)}
          activeOutlineColor={colors.PRIMARY_COLOR}
          style={style.textInput} />

        <TextInput
          value={password}
          label='Password'
          mode='outlined'
          secureTextEntry={passwordVisible}
          onChangeText={(text) => setPassword(text)}
          style={style.textInput}
          activeOutlineColor={colors.PRIMARY_COLOR}
          right={<TextInput.Icon icon={passwordVisible ? "eye-off" : "eye"} onPress={() => togglePassword()} />} />

        <Text style={style.passwordText}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>Forgot Password</Text>

        <Button
          mode='contained'
          style={style.button}
          labelStyle={{ color: colors.WHITE_COLOR }}>
          Login
        </Button>
        <Text style={style.orText}>OR</Text>
        <Button
          mode='outlined'
          style={style.buttonOutline}
          labelStyle={{ color: colors.BLACK_COLOR }}
          onPress={() => navigation.navigate('RegistrationScreen')}>
          New User
        </Button>

        <Button
          mode='outlined'
          style={style.buttonOutline}
          labelStyle={{ color: colors.BLACK_COLOR }}
          onPress={() =>  crashlytics().crash()}>
          Crash Button
        </Button>
      </View>
    </View>
  )
}