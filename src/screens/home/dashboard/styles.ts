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
    },
    videoView:{
        overflow: 'hidden',
        borderRadius: 10,
        height: 300,
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }

});

export default style;