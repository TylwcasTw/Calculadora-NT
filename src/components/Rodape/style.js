import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    formContext:{
        width: "80%",
        height:"auto",
        bottom: 0,
        backgroundColor: "#4e4e4e",
        alignItems: "center",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 70,
        borderColor: "#4E4E4E",
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
    },

    formMain:{
        flex: 1,
        width: "100%",
        height: "auto",
        paddingBottom: 0,
        flexDirection: 'row',
    },

    form:{
        width: "100%",
        height: "auto",
        flexDirection: 'row',
    },

    divMain:{
        width: "100%",
        height: 0.5,
        margin: 10,
        backgroundColor: "#fff",
    },

    div: {
        width: "100%",
        height: 0.5,
        margin: 8,
        backgroundColor: "#fff",
    },

    labelMain:{
        flex: 1,
        color: "#fff",
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: "bold",
    },

    label:{
        flex: 1,
        color: "#fff",
        fontSize: 16,
        paddingLeft: 10,
    },
});

export default styles