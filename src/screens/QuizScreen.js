import React, {Fragment, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StatusBar, Text, View, Button} from "react-native";
import {StyleSheet, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from 'react-native';
const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});
const QuizScreen = ({ navigation, route }) => {
    const [value, setValue] = useState(0);
    const [currency, setCurrency] = useState('US Dollar');
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <Fragment>
            <View>
                <Text> Demo Form </Text>
                <View>
                    <TextInput placeholder="Email" />
                    <Text>
                        What is your income range
                    </Text>
                    <View style={styles.container}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 10, width: 350 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="WAY less than $165,000 per year" value="1" />
                            <Picker.Item label="A little less than $165,000 per year" value="2" />
                            <Picker.Item label="About $165,000 per year" value="3" />
                            <Picker.Item label="A little more than less than $165,000 per year" value="4" />
                            <Picker.Item label="WAY more than $165,000 per year" value="5" />
                        </Picker>
                        <View>
                            <Button
                                title="Back To Home Page"
                                onPress={() =>
                                    navigation.navigate('Home')
                                }
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Fragment>
    );
};

export default QuizScreen;
