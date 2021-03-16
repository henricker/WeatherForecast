import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import condition from '../../util/conditions';

interface Props {
  data: {
    date: string,
    weekday: string,
    max: number,
    min: number,
    description: string,
    condition: string,
  }
}

const Forecast: React.FC<Props> = (props) => {
  let icon = condition(props.data.condition);
  return (
    <View style = {styles.container}>
      <Text style = {styles.date}>{props.data.date}</Text>
      <Ionicons name = {icon.name} color = {icon.color} size = {25}/>
      <View style = {styles.weather}>
        <Text>{props.data.min}°</Text>
        <Text style = {{fontSize: 18, fontWeight: 'bold'}}>{props.data.max}°</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  date: {
    fontSize: 15
  },
  weather: {
    alignItems: 'center',

  }
})

export default Forecast;
