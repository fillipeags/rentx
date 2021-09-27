import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { RectButton } from 'react-native-gesture-handler'

import Animated, {
  useSharedValue,
} from 'react-native-reanimated'

import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car'
import { LoadAnimation } from '../../components/LoadAnimation'


import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles'


export function Home() {
  const navigation = useNavigation()
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car })
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
  }, []);

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

          {!loading &&
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          }
        </HeaderContent>
      </Header>

      {loading ? <LoadAnimation /> :

        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      }
    </Container >
  )
}
