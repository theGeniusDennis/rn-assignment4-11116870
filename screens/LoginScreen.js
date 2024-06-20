// screens/LoginScreen.js
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Local image imports
const appleIcon = require('../assets/apple_icon.png');
const googleIcon = require('../assets/google_icon.png');
const facebookIcon = require('../assets/facebook_icon.png');

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.LogIn}>
        <Image
          style={styles.HomeIndicator}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yl85l9lwju8-1%3A260?alt=media&token=521a630c-c7df-4e0f-8143-e1bf361eff3f',
          }}
        />
        <View style={styles.Group8510}>
          <Text style={styles.Jobizz}>Jobizz</Text>
          <View style={styles.Group46}>
            <Text style={styles.Headline}>Welcome Back 👋</Text>
            <Text style={styles.Headline1}>Let’s log in. Apply to jobs!</Text>
          </View>
          <View style={styles.Group49}>
            <View style={styles.Group48}>
              <TextInput
                style={styles.TextInput}
                placeholder="Name"
                placeholderTextColor="rgba(175,176,182,1)"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.Group47}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="rgba(175,176,182,1)"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.ButtonContainer}>
              <Button
                title="Log in"
                onPress={handleLogin}
                color="rgba(53,104,153,1)"
              />
            </View>
          </View>
          <View style={styles.Group52}>
            <Text style={styles.OrContinueWith}>----- Or continue with -----</Text>
          </View>
          <View style={styles.SocialIcons}>
            <Image style={styles.SocialIcon} source={appleIcon} />
            <Image style={styles.SocialIcon} source={googleIcon} />
            <Image style={styles.SocialIcon} source={facebookIcon} />
          </View>
        </View>
        <Text style={styles.HavenTAnAccountRegis}>
          Haven’t an account?<Text style={styles.Regis}> Register </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 120, // Increased top padding to bring down content more
    backgroundColor: 'rgba(250,250,253,1)',
  },
  LogIn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  HomeIndicator: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 34,
  },
  HavenTAnAccountRegis: {
    marginTop: 20,
    color: 'rgba(189,190,194,1)',
    fontSize: 14,
    fontFamily: 'Circular Std, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },
  Regis: {
    marginTop: 20,
    color: 'blue',
    fontSize: 14,
    fontFamily: 'Circular Std, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },
  Group8510: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  Jobizz: {
    color: 'rgba(53,104,153,1)',
    fontSize: 22,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    letterSpacing: -0.44,
    alignSelf: 'flex-start', // Align to the left
  },
  Group46: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start', // Align to the left
  },
  Headline: {
    color: 'rgba(13,13,38,1)',
    fontSize: 24,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    letterSpacing: -0.36,
    textAlign: 'left', // Align to the left
  },
  Headline1: {
    color: 'rgba(13,13,38,1)',
    fontSize: 14,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    letterSpacing: -0.14,
    textAlign: 'left', // Align to the left
    marginTop: 10,
    marginBottom: 30, // Added space after "Let's log in. Apply to jobs!" text
  },
  Group49: {
    marginTop: 20,
    width: '100%',
  },
  Group48: {
    width: '100%',
    height: 52,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(175,176,182,1)',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  Group47: {
    marginTop: 15,
    width: '100%',
    height: 52,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(175,176,182,1)',
    borderRadius: 10,
    justifyContent: 'center',
  },
  TextInput: {
    color: 'rgba(13,13,38,1)',
    fontSize: 14,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    letterSpacing: -0.14,
  },
  ButtonContainer: {
    marginTop: 20,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 30, // Added space after login button
  },
  Group52: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  OrContinueWith: {
    color: 'rgba(175,176,182,1)',
    fontSize: 13,
    fontFamily: 'Circular Std, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
  },
  SocialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 30, // Added space after icons
  },
  SocialIcon: {
    width: 40,
    height: 40,
  },
});
