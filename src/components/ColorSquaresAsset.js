import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ColorSquaresAsset() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/images/colorsquares.png')} />
                <Image style={styles.image} source={require('../assets/images/braindrawing.png')} />
      <Text style={styles.paragraph}>
        The brain processes a provocation by a boss, competitive coworker, or dismissive subordinate as a life-or-death threat
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
    margin: 14,
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir'
  },
  logo: {
    height: 12,
    width: 80,
  },
  image: {
    marginTop: 10,
    height: 80,
    width: 80,
  }
});
