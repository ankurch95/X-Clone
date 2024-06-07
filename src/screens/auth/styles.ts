import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { FONTS, FONTS_SIZE } from "../../theme/fonts";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
        padding: 10
    },
    welcomeText: {
        fontSize: FONTS_SIZE.xl,
        marginTop: 50,
        fontFamily: FONTS.FontsRegular
    },
    textInput: {
        backgroundColor: colors.WHITE_COLOR,
        marginTop: 20
    },
    passwordText: {
        textAlign: 'right',
        marginTop: 20,
        fontFamily: FONTS.FontsMedium
    },
    orText: {
        marginTop: 20,
        textAlign: 'center',
        fontFamily: FONTS.FontsMedium
    },
    button: {
        marginTop: 20,
        borderRadius: 4,
        backgroundColor: colors.PRIMARY_COLOR
    },
    buttonOutline: {
        marginTop: 20,
        borderRadius: 4,
        backgroundColor: colors.WHITE_COLOR,
        borderColor: colors.PRIMARY_COLOR,
        fontFamily: FONTS.FontsMedium
    },
});

export default style;