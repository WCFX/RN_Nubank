import React from 'react';
import { Container, PositionTabs } from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

const Home = () => (
  <Container>
    <Header />
    <PositionTabs>
      <Tabs />
    </PositionTabs>
  </Container>
);

export default Home;
