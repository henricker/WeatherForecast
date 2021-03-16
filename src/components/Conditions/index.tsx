import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Conditions: React.FC = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.conditions}>
        <Feather name='wind' size={35} color = '#1ED6FF'/>
        <Text>7 km/h</Text>
      </View>
      <View style = {styles.conditions}>
        <MaterialCommunityIcons name='weather-sunset-up' size={35} color = '#1ED6FF'/>
        <Text>5:22 am</Text>
      </View>
      <View style = {styles.conditions}>
        <MaterialCommunityIcons name='weather-sunset-down' size={35} color = '#1ED6FF'/>
        <Text>6:00 pm</Text>
      </View>
      <View style = {styles.conditions}>
        <Feather name='droplet' size={35} color = '#1ED6FF'/>
        <Text>54</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 15,
    padding: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    borderRadius: 8
  },
  conditions: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Conditions;