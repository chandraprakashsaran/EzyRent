import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    titleWrapper:{
      width:'90%',
      alignSelf:'center',
      marginVertical:20,
      flexDirection:'row',
      alignItems:'center',
    },
    backscreen:{
      width:30,
      height:17,
    },
    rectWrapp:{
      backgroundColor:theme.colors.lightBackgrountColor,
      marginTop:80,
      minHeight:theme.dimens.defaultScreenMinHeight,
    },
    columntitle:theme=>({
      color:theme.colors.descriptionColor,
      fontFamily:theme.typography.fontFamilyOxygenBold,
      fontSize:16,
      fontWeight:theme.typography.fontWeightBold,
      width:'100%',
      textAlign:'left',
      marginBottom:20,
    }),
    profilebg:{
      alignContent:'center',
      alignItems:'center',
      position:'relative',
      marginLeft: 0,
      height: 124,
      width: 124,
      borderRadius: 60,
      borderWidth: 2,
      borderBottomColor:'#9eda90',
      borderLeftColor:'#9eda90',
      borderRightColor:'#9eda90',
      borderTopColor:'#8cc3fc',
    },
    profilePik:{
      height: 120,
      width: 120,
      borderRadius: 60,
    },
    profileEdit:{position:'absolute',top:10,width:40,height:40,alignItems:'center',},
    profileRemove:{position:'absolute',bottom:10,width:40,height:40,borderRadius:20,alignItems:'center',},
    editIcon: {
      //tintColor: "#315ad6",
      resizeMode: "cover",
      height: 40,
      width: 40,
    },
    removeIcon:{
      //tintColor: "#315ad6",
      resizeMode: "cover",
      height: 40,
      width: 40,
    },
    formcolumn:{
      flexDirection: "column",
      width:'100%',
      alignItems: "center",
      justifyContent: "center",
    },
    fieldWrapp:{
      width:'100%',
      marginTop:20,
      borderWidth:1,
      borderColor:'transparent',
    },
    textInputStyle:theme=>({
      width:'100%',
      borderColor:theme.colors.secondry,
      borderBottomWidth:1,
      color:theme.colors.primaryTitleColor,
      fontFamily:theme.typography.secondryFont,
      fontSize:16,
      fontWeight:theme.typography.fontWeightRegular,
      marginTop:theme.spacing.small,
    }),
    textInputStyleSec:theme=>({
      width:'100%',
      borderColor:theme.colors.lightBorder,
      borderBottomWidth:1,
      color:theme.colors.primaryTitleColor,
      fontFamily:theme.typography.secondryFont,
      fontSize:16,
      fontWeight:theme.typography.fontWeightRegular,
      marginTop:theme.spacing.small,
    }),
    pinwrapper: theme =>({
      flexDirection:'column',
      width:'100%',
      alignSelf:'center',
    }),
    pintitle: theme =>({
      fontFamily:theme.typography.primaryFont,
      fontWeight:theme.typography.fontWeightRegular,
      fontSize:16,
      color:theme.colors.descriptionColor,
    }),
    pincontainer: theme => ({
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      position:'relative',
    }),
    pininputBox: theme =>({
      height:60,
      width:'100%',
      alignSelf:'center',
    }),
    underlineStyleHighLighted: theme => ({
      borderColor: theme.colors.secondry,
    }),
    underlineStyleBase: theme => ({
      width: theme.dimens.defaultPinCodeWidth,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color:theme.colors.descriptionColor,
      borderColor:theme.colors.descriptionColor,
      fontSize:22,
        fontFamily:theme.typography.primaryFont,
      fontWeight:theme.typography.fontWeightRegular,
    }),
    visibilityIconWrapp:{
      position:'absolute',
      right:0,
      top:0,
    },
    visibilityIcon:{
      width:25,
      height:20,
    },
    fielcountrylabel: theme =>({
      flexDirection:'row',
      justifyContent:'space-between',
      width:'35%',
      alignItems:'center',
      borderBottomWidth:1,
      borderColor:theme.colors.lightBorder,
    }),
    fieltext:theme=>({
      color:theme.colors.primaryTitleColor,
      fontFamily:theme.typography.secondryFont,
      fontSize:16,
      fontWeight:theme.typography.fontWeightRegular,
      marginTop:2,
    }),
    rectView:theme=>({
      marginBottom:50,
    }),
    downarrowicon:{
      width:14,
      height:14,
      marginTop:10,
    },
    contactbook:theme=>({
      width:'62%',
      borderColor:theme.colors.lightBorder,
    }),
    twocolumn:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    spacingProvide:{
      width:'100%',
      height:70,
      zIndex:1
    },
    addBtncontainer:theme=>({
      position: 'absolute',
      flex: 1,
      left: 0,
      right: 0,
      bottom: 0,
      width:'100%',
      backgroundColor:theme.colors.secondry,
      alignItems:'center',
      justifyContent:'center',
      height:50,
    }),
    addBtncaption:theme =>({
      //borderBottomWidth:1,
      color:theme.colors.primBtnTextColor,
      fontFamily:theme.typography.primaryFont,
      fontSize:22,
      fontWeight:theme.typography.fontWeightSemiBold,
      textTransform:'uppercase',
    }),
    dscribe:theme =>({
      //borderBottomWidth:1,
      color:theme.colors.descriptionColor,
      fontFamily:theme.typography.secondaryFont,
      fontSize:12,
      fontWeight:theme.typography.fontWeightRegular,
      lineHeight:20,
    }),
    fieldWrappLast:{
      marginBottom:20,
    },
  });