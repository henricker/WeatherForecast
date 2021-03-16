import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const forecastList = [
  {
    'date': '16/03',
    'weekday': 'Ter',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'storm'
  },
  {
    'date': '17/03',
    'weekday': 'Qua',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'clear_day'
  },
  {
    'date': '18/03',
    'weekday': 'Ter',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'clear_day'
  },
  {
    'date': '19/03',
    'weekday': 'Qui',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'cloud'
  },
  {
    'date': '20/03',
    'weekday': 'Sex',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'cloud'
  },
  {
    'date': '21/03',
    'weekday': 'Sab',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'storm'
  },
  {
    'date': '22/03',
    'weekday': 'Dom',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'rain'
  },
  {
    'date': '23/03',
    'weekday': 'Seg',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'storm'
  },
  {
    'date': '24/03',
    'weekday': 'Ter',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'storm'
  },
  {
    'date': '25/03',
    'weekday': 'Qua',
    'max': 25,
    'min': 17,
    'description': 'Parcialmente nublado',
    'condition': 'storm'
  },

];

const  Home: React.FC = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Menu/>
      <Header/>
      <Conditions/>
      <FlatList
        horizontal = {true}
        contentContainerStyle = {{paddingBottom: '5%'}}
        data = {forecastList}
        keyExtractor = {item => item.date }
        renderItem = {({item}) => <Forecast data = {item} /> }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  }
});

export default Home;