import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function BrainHbsArticle() {
  return (
    <View style={styles.container}>

          <Image style={styles.logo} source={require('../assets/images/1.png')} />
                <Image style={styles.image} source={require('../assets/images/2.png')} />
                                <Image style={styles.image2} source={require('../assets/images/3.png')} />


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
    margin: 14,
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir'
  },
  logo: {
    height: 300,
    width: 250,
  },
  image: {
    marginTop: 5,
    height: 320,
    width: 250,
  },
  image2: {
    marginTop: 1,
    height: 140,
    width: 250,
  },


});
