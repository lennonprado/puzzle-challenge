import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";

// StyleSheetsss
import cardStyles from "../styles/CardStyles";
import generalStyles from "../styles/GeneralStyles";


const Card = ({ item }) => {
    // Extract styles from styleSheets
    const { container, } = generalStyles,
        { title, cardImage, description, cardFooter, cardItem } = cardStyles;

    // Get window width and height
    const { window } = useWindowDimensions();
        
    const { width,height } = useWindowDimensions();

    const widthCard = useWindowDimensions().width - 100;
    //const widthImage = useWindowDimensions().width - 40;

    return (
        <View style={[container, cardItem, { width:widthCard }]}>            
            <Image
                source={{ uri: item.image }}
                style={[cardImage, { width:widthCard }]}
            />
            <View style={cardFooter}>
                <Text style={title}>{item.title}</Text>
                <Text style={description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default Card;