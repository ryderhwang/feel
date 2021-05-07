import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Careeriously() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/images/colorsquares.png')} />
          <Image style={styles.image}
          source={{
          uri: 'https://cdn.vox-cdn.com/thumbor/nMLkWu8FAuztoX16A1JM_LzcefA=/0x0:2880x1920/1520x1013/filters:focal(1210x512:1670x972):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58781213/Glossier_Emily_Weiss_Code_Commerce_2017.0.jpg',
        }} />

      <Text style={styles.paragraph}>
      Careeriously!? <Text style={styles.paragraphlight}>
    stories
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
    fontFamily: 'Baskerville-Italic'
  },
  logo: {
    height: 12,
    width: 80,
  },
  image: {
  marginTop: 10,
   height: 200,
   width: '100%',
  }
});
