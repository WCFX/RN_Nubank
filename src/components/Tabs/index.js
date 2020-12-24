import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCummunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Container, TabsContainer, TabItem, TabText } from './styles';

export default ({ translateY }) => (
  <Container
    style={{
      transform: [
        {
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 90],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: translateY.interpolate({
        inputRange: [0, 400],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    }}
  >
    <TabsContainer>
      <TabItem>
        <IconCummunity name="clover" size={24} color="#FFF" />
        <TabText>Pix</TabText>
      </TabItem>
      <TabItem>
        <IconAwesome name="barcode" size={24} color="#FFF" />
        <TabText>Pagar</TabText>
      </TabItem>
      <TabItem>
        <Icon name="person-add" size={24} color="#FFF" />
        <TabText>Indicar{'\n'}amigos</TabText>
      </TabItem>
      <TabItem>
        <IconIonicons name="cloud-upload-outline" size={24} color="#FFF" />
        <TabText>Transferir</TabText>
      </TabItem>
      <TabItem>
        <IconIonicons name="md-cloud-download-outline" size={24} color="#FFF" />
        <TabText>Depositar</TabText>
      </TabItem>
      <TabItem>
        <IconAwesome name="credit-card" size={24} color="#FFF" />
        <TabText>Cartão Virtual</TabText>
      </TabItem>
    </TabsContainer>
  </Container>
);
