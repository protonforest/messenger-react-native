import React from 'react';
import { Text, TextInput, Button, View, Image, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  

export default function HomeScreen() {
    return(
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../images/zaman.png')}
          />
          <Text>Home Screen.</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          <StatusBar style="auto" />
        </View>
    );
}
