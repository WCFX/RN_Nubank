import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Container, Code } from './styles';

export default () => (
  <Container>
    <Code>
      <QRCode
        value="https://nubank.com.br"
        size={80}
        bgColor="#FFF"
        color="#8c05bd"
      />
    </Code>
  </Container>
);
