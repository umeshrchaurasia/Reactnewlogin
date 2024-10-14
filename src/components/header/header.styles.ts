import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants/constants";
import { hdp, wdp } from "../../utils/utility";

const styles = StyleSheet.create({
    root:{
        backgroundColor:Colors.primary,
        paddingVertical:hdp(1),
        paddingHorizontal:wdp(3),
        height:50,
        flexDirection:"row",
        // justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:Colors.white,
        ...Fonts.poppinsTextBold18,
        padding:0,
        includeFontPadding:false,
        margin:0,
        textAlign:"center",
        alignSelf:"center",
        flex:1,
    }
})


export default styles