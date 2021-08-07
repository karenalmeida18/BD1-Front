import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nino from '../../static/images/nino.png';

import * as S from './styles';

const Home = () => (
  <S.Container id="home">
    <Carousel variant="dark">
      <Carousel.Item>
        <S.Image
          src={Nino}
          alt="cachorro perdido,Contato: Isabella
          Celular/WhatsApp: (11) 91234-5678
          Email: ola@sitebacana.com.br, Oferecemos recompensa"
        />
        <Carousel.Caption>
          <S.Button> encontrei! </S.Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </S.Container>
);

export default Home;
