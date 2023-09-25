import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom: 0,
        backgroundColor:"#4e4e4e",
        alignItems:"center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
        
    },
    form:{
        width: 400,
        height: 500,
        marginTop: 0,
        padding: 20,
    },
    label:{
        color:"#000",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight:"bold"
    },
    
    input:{
            width:"auto",
            borderRadius: 20,
            backgroundColor:"#808080",
            height: 40,
            margin: 10,
            paddingLeft:10,
    },
    buttonCalculator:{
        borderRadius: 30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ff8210",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 30,
        marginTop: 10,
        margin: 30,

    },
    textButtonCalculator:{
            fontSize: 16,
            color: "#fff",
            fontWeight:"bold"
    },
    errormessage:{
        fontSize: 12,
        color: "red",
        paddingLeft: 10,
    }

})

export default styles