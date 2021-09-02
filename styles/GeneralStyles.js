import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    ContainerflexView: { 
        flex: 4,         
    },
    buttonsNav :{
        flex:1,
        flexDirection: "row",
        alignItems: 'stretch',    
    },
    flatContainer :{
        paddingTop: 40,
        paddingBottom:40,
    },
    buttonsContainer:{        
        flexDirection: "row", 
        flexWrap: "wrap",
        flex: 1,
        alignItems: "center",
        justifyContent: "center" 
    }
      
});

export default generalStyles;

