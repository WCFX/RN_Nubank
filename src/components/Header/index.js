import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Top, Logo, Title } from './styles';
import LogoNuBank from '../../assets/images/Nubank_Logo.png';

export default () => {
  const [userName, setUserName] = useState('Wagner');

  return (
    <Container>
      <Top>
        <Logo source={LogoNuBank} />
        <Title>Olá {userName}</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
};
