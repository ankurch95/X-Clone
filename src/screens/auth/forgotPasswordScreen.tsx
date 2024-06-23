import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import style from './styles'
import { colors } from '../../theme/colors'

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState<string>('')

  return (
    <View style={style.container}>
      <Text style={style.welcomeText}>Forgot Password,</Text>

      <View style={{ marginTop: 50 }}>
        <TextInput
          value={username}
          mode='outlined'
          label={'Username/Email'}
          keyboardType='email-address'
          onChangeText={(text) => setUsername(text)}
          activeOutlineColor={colors.PRIMARY_COLOR}
          style={style.textInput} />

        <Button
          mode='contained'
          style={style.button}
          labelStyle={{ color: colors.WHITE_COLOR }}>
          Reset
        </Button>

      </View>
    </View>
  )
}

export default ForgotPasswordScreen