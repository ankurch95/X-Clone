import { View, Text } from 'react-native'
import React, { useState } from 'react'
import style from './styles'
import { colors } from '../../theme/colors'
import { Button, TextInput } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../routes/authTypes'

type Props = NativeStackScreenProps<AuthRootStackParamList>

const RegistrationScreen = ({ navigation }: Props ) => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(true)

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <View style={style.container}>
            <Text style={style.welcomeText}>Create your account,</Text>

            <View style={{ marginTop: 50 }}>

            <TextInput
                    value={username}
                    mode='outlined'
                    label={'Name'}
                    onChangeText={(text) => setUsername(text)}
                    activeOutlineColor={colors.PRIMARY_COLOR}
                    style={style.textInput} />

                <TextInput
                    value={email}
                    mode='outlined'
                    label={'Email'}
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
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

                <Button
                    mode='contained'
                    style={style.button}
                    labelStyle={{ color: colors.WHITE_COLOR }}>
                    Sign Up
                </Button>
                <Text style={style.orText}>OR</Text>
                <Button
                    mode='outlined'
                    style={style.buttonOutline}
                    labelStyle={{ color: colors.BLACK_COLOR }}
                    onPress={() => navigation.navigate('AuthScreen')}>
                    Login as existing user
                </Button>
            </View>
        </View>
    )
}

export default RegistrationScreen