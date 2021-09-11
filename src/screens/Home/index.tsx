import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car'
import { Load } from '../../components/Load'

import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles'


type RootStackParamList = {
  Home: undefined;
  CarDetails: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

export function Home() {
  const { navigate } = useNavigation<HomeScreenNavigationProp>()
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }

  function handleCarDetails() {
    navigate('CarDetails')
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        await api.get('/cars').then((response) => setCars(response.data))
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    fetchCars();
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      {loading ? <Load /> :

        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Car data={item} onPress={handleCarDetails} />}
        />
      }
    </Container>
  )
}
