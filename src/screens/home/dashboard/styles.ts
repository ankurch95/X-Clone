import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { FONTS, FONTS_SIZE } from "../../../theme/fonts";

const style = StyleSheet.create({
    cardContainer: {
        margin: 10,
        backgroundColor: 'white'
    },
    title: {
        fontFamily: FONTS.FontsBold,
        fontSize: FONTS_SIZE.md
    },
    statView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 10
    },
    statSubView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    statText: {
        marginLeft: 5,
        fontSize: FONTS_SIZE.base,
        fontFamily: FONTS.FontsMedium
    }

});

export default style;