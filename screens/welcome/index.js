import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Button title="Sign Up" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24
  },
  inputContainer: {
    marginBottom: 24
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8
  }
});
export default SignupScreen;