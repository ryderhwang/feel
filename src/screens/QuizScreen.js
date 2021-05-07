import React, {Fragment} from 'react';
import {Image, SafeAreaView, ScrollView, StatusBar, Text, View, Button} from "react-native";

const QuizScreen = ({ navigation, route }) => {
    return (
        <Fragment>
            <Text>
                This is {route.params.name}'s quiz
            </Text>
            <Button
                title="Back To Home"
            onPress={() =>
                navigation.navigate('Home')
            }
            />
        </Fragment>
    );
};

export default QuizScreen;
