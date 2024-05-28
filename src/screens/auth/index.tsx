import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import style from './styles'
import { colors } from '../../theme/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../routes/authTypes'

type Props = NativeStackScreenProps<AuthRootStackParamList>
export default function AuthScreen({ navigation }: Props) {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true)

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

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
      </View>
    </View>
  )
}