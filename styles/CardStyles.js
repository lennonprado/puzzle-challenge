import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
    cardItem: {        
        margin:10,
        borderRadius:20,
        padding:0,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        
    },
    title: {
        marginTop:20,
        marginLeft:20,
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
        color: "#FFF",
        textAlign: "left",
        textTransform:"uppercase"
    },
    description:{
        color: "#CCC",
        marginLeft:20,
        fontSize: 18,
        fontStyle:"italic"
        
    },
    cardImage: {        
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        resizeMode: "cover",
        justifyContent: "center",
        flex: 1,
    },
    cardFooter: { 
        paddingBottom:20,
        backgroundColor:'#333',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20 
    },
});

export default cardStyles;