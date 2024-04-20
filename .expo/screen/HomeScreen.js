import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>Home Screen</Text>
            </View> 
            <StatusBar style="light" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
  });