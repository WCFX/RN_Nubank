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
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    let opened = false;

    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 400 : 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 400 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 420],
                    outputRange: [0, 420],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
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
        <Tabs translateY={translateY} />
      </PositionTabs>
    </Container>
  );
};

export default Home;
