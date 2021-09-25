import React from 'react';
import { StatusBar } from 'react-native'

import theme from '../../styles/theme';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import {
  Container,
  Header,
  Title,
  Form,
  SubTitle,
  Footer
} from './styles';

export function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos{'\n'}quase lá.</Title>
        <SubTitle>Faça seu login para começar{'\n'}uma experiência incrível</SubTitle>
      </Header>

      <Form>

        <Input iconName="mail" />
      </Form>
      <Footer>
        <Button
          title="Login"
          onPress={() => { }}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          light
          onPress={() => { }}
          enabled={false}
          loading={false}
        />
      </Footer>
    </Container>
  );
}