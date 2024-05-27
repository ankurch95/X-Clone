import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { FONTS_SIZE } from "../../theme/fonts";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
        padding: 10
    },
    welcomeText: {
        fontSize: FONTS_SIZE.xl,
        fontWeight: '600',
        marginTop: 50
    },
    textInput: {
        backgroundColor: colors.WHITE_COLOR,
        marginTop: 20
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
        borderColor: colors.PRIMARY_COLOR
    },
});

export default style;