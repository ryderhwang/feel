import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function FeelSmarter() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/images/colorsquares.png')} />
          <Image style={styles.image}
          source={{
          uri: 'https://cdn.vox-cdn.com/thumbor/E8QyMuL80hWtqwHUsv_sqtnDAs4=/0x0:3281x2301/1520x1013/filters:focal(1414x303:1938x827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67599321/Election_2020_Debate__4_.0.jpg',
        }} />

      <Text style={styles.paragraph}>
       f e e l smarter  <Text style={styles.paragraphlight}>
       the 7ci tool
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
    fontWeight: "100",
    fontFamily: 'HelveticaNeue-LightItalic'
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
