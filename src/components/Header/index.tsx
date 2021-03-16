import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Header: React.FC = () => {
  return (
    <LinearGradient
      style = {styles.header}
      colors = {['#1ed6ff', '#97c1ff']}
    >
      <Text style = {styles.date}>20/02/2021</Text>
      <Text style = {styles.city}>Boa Viagem</Text>
      <Ionicons
        name='cloud'
        color='#FFF'
        size={150}
      />

      <Text style = {styles.weather}>30°</Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '95%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  date: {
    color: '#FFF',
    fontSize: 17
  },
  city: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  weather: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold'
  }
});

export default Header;

