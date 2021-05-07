import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function FeelStats() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/images/colorsquares.png')} />
          <Image style={styles.image}
          source={{
          uri: 'https://static01.nyt.com/images/2016/02/11/business/11fed3/11fed3-jumbo.jpg?quality=90&amp;auto=webp',
        }} />

      <Text style={styles.paragraph}>
        HOLY $&amp;1+  <Text style={styles.paragraphlight}>
       the numbers
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
    fontFamily: 'Avenir-LightOblique'
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
