import React, {Fragment} from 'react';
import {Image, SafeAreaView, ScrollView, StatusBar, Text, View, Button, StyleSheet} from "react-native";
import {FEEL_ICON} from "../asset/images";
import TimeComponent from "../components/TimeComponent";
import LearnMoreLinks from "../components/LearnMoreLinks";
import {NavigationContainer} from "@react-navigation/native";
import {Colors} from "react-native/Libraries/NewAppScreen";


const HomeScreen = ({ navigation }) => {
    return (
    <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <Image source = {FEEL_ICON} style={styles.image} />
                <TimeComponent />
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Current Stress Level</Text>

                        <Text style={styles.sectionDescription}>
                            Current stress level is <Text style={styles.highlight}>low</Text>.
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Learn More</Text>
                        <Text style={styles.sectionDescription}>
                            Read the docs to discover what is next
                        </Text>
                    </View>
                    <LearnMoreLinks />
                    <Button
                        title="Go to Rider's quiz"
                        onPress={() =>
                            navigation.navigate('Quiz', { name: 'Rider' })
                        }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    </Fragment>);
}

export default HomeScreen;


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    image: {
        marginLeft: 125,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        aspectRatio: 1.5,
        width: 200,
        height: 100,
        resizeMode: 'contain',

    }
});
