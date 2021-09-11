import React from 'react';
import { useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StatusBar } from 'react-native'

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg'
import { ConfirmButton } from '../../components/ConfirmButton';

export function ScheduleCompleted() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation()

  function handleHome() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alogado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleHome} />
      </Footer>

    </Container>
  );
}