import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function FeelingFriendzy() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/images/colorsquares.png')} />
          <Image style={styles.image}
          source={{
          uri: 'https://i.dailymail.co.uk/i/pix/2017/08/22/21/4378359B00000578-4814148-image-a-58_1503434583373.jpg',
        }} />

      <Text style={styles.paragraph}>
        feeling friendzy <Text style={styles.paragraphlight}>
       conversation
      </Text>
      </Text>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  paragraph: {
    margin: 0,
    marginTop: 10,
    fontSize: 14,
    // fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir-Heavy'
  },
  paragraphlight: {
    margin: 0,
    marginTop: 10,
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'BodoniSvtyTwoITCTT-BookIta'
  },
  logo: {
    height: 12,
    width: 80,
  },
  image: {
  marginTop: 10,
   height: 250,
   width: '100%',

  }
});
