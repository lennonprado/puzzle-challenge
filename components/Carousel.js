import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Animated, Button, Text } from "react-native";

// Components
import Card from './Card';

// Stylesheets
import generalStyles from "../styles/GeneralStyles";

const Carousel = () => {
    
    // Styles
    const { container, ContainerflexView, flatContainer, buttonsContainer } = generalStyles;
        
    // Initial states
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalCards, setTotal] = useState(0);
    const [cards, setcards] = useState([]);
    const [value, setValue] = useState("");

    // Refs
    const scrollX = useRef(new Animated.Value(0)).current;
    const cardsRef = useRef(null);

    const ScrollToNext = async () => {
        if (currentIndex < (totalCards - 1)) {
            cardsRef.current.scrollToIndex({ index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        }
    };

    const ScrollToPrevious = () => {
        if (currentIndex > 0) {
            cardsRef.current.scrollToIndex({ index: currentIndex - 1 });
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        fetch("http://demo4883877.mockable.io/")
            .then((res) => res.json())
            .then((cards) => {
                if (cards) {
                    setcards(cards);
                    setTotal(cards.length);
                }
                else alert("Something Went Wrong!!");
            });
    }, [value]);


    return (
        <>
            {cards[0] ? (
                <View style={ container }>
                    <View style={ ContainerflexView }>
                        <FlatList
                            data={cards}
                            renderItem={({ item }) => (
                                <Card
                                    key={item.id.toString()}
                                    item={item}
                                />
                            )}                            
                            contentContainerStyle={flatContainer}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            initialScrollIndex={parseInt(value)}
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.id.toString()}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: { x: scrollX },
                                        },
                                    },
                                ],
                                {
                                    useNativeDriver: false,
                                }
                            )}
                            scrollEventThrottle={32}
                            ref={cardsRef}
                        />
                    </View>
                    <View>
                        <Text>{ currentIndex+1 } of { totalCards }</Text>
                    </View>
                    <View style={buttonsContainer}>
                        <Button
                            onPress={ScrollToPrevious}
                            disabled={(currentIndex == 0)}
                            title="Prev"
                        />
                        <Button
                            title="Next"
                            onPress={ScrollToNext}
                            disabled={( currentIndex+1 == totalCards)}
                        />                        
                    </View>
                </View>
            ) : (    <Text>Loading...</Text>     )}
        </>
    );
};

export default Carousel;