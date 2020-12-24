import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default ({ translateY }) => (
  <Container
    style={{
      opacity: translateY.interpolate({
        inputRange: [0, 400],
        outputRange: [0, 1],
      }),
    }}
  >
    <Code>
      <QRCode
        value="https://nubank.com.br"
        size={80}
        bgColor="#FFF"
        color="#8c05bd"
      />
    </Code>

    <Nav>
      <NavItem>
        <Icon name="help-outline" size={20} color="#FFF" />
        <NavText>Me ajuda</NavText>
      </NavItem>
      <NavItem>
        <Icon name="person-outline" size={20} color="#FFF" />
        <NavText>Perfil</NavText>
      </NavItem>
      <NavItem>
        <Icon name="engineering" size={20} color="#FFF" />
        <NavText>Configurar conta</NavText>
      </NavItem>
      <NavItem>
        <Icon name="vpn-key" size={20} color="#FFF" />
        <NavText>Minhas chaves Pix</NavText>
      </NavItem>
      <NavItem>
        <Icon name="credit-card" size={20} color="#FFF" />
        <NavText>Configurar Cartão</NavText>
      </NavItem>
      <NavItem>
        <Icon name="storefront" size={20} color="#FFF" />
        <NavText>Pedir conta PJ</NavText>
      </NavItem>
      <NavItem>
        <Icon name="star-border" size={20} color="#FFF" />
        <NavText>Participe da nossa promo</NavText>
      </NavItem>
      <NavItem>
        <Icon name="notifications-on" size={20} color="#FFF" />
        <NavText>Configurar notificações</NavText>
      </NavItem>
      <NavItem>
        <Icon name="phonelink-setup" size={20} color="#FFF" />
        <NavText>Configurações do app</NavText>
      </NavItem>
      <SignOutButton>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Nav>
  </Container>
);
