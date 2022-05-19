import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert  } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [titleText, setTitleText] = useState("Titol");
  const bodyText = "Lorum upsim lmao";
  let pressed = 0;

  const onPressTitle = () => {
    if(pressed == 0) {
      setTitleText("Klik Klik Klik Klik");
      pressed = 1;
    } else {
      setTitleText("Tok Tok Tok Tok");
      pressed = 0;
    }
  };

  const onPressButton = () => {
    Alert.alert('BOOOO')
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.titleText} onPress={onPressTitle}>{titleText}</Text>
        <Text style={styles.bodyText}>
          {bodyText}
          <Text style={styles.innerText}> Blauwtje Gelopen</Text>
        </Text>
        <View style={styles.block}></View>
      </View>
      <Button
        onPress={onPressButton}
        title="Klik Op Mij please"
        color="#52216e"
        accessibilityLabel="Learn more about this button"
      />
      <Button
        onPress={onPressButton}
        title="ha loser"
        color="#4c8f82"
        disabled
        accessibilityLabel="Learn more about this button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f54f4f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#EEE',
    fontSize: 32,
    alignItems: 'center',
  },
  bodyText: {
    color: '#EEE',
    fontSize: 16,
    alignItems: 'center',
  },
  innerText: {
    color: '#99c2db'
  },
  block: {
    margin: 32,
    backgroundColor: '#52216e',
    height: 100,
    width: 200,
  }
});
