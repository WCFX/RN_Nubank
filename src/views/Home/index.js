import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
  Container,
  PositionTabs,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

const Home = () => {
  const [totalValue, setTotalValue] = useState('1.840.540,87');

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event([]);

  function onHandlerStateChange(event) {}

  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ {totalValue}</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 16.000,00 realizada para Cintia Schirmann
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <PositionTabs>
        <Tabs />
      </PositionTabs>
    </Container>
  );
};

export default Home;
