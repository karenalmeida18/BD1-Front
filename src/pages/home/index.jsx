import React from 'react';
import Nino from '../../static/images/nino.png';

import * as S from './styles';

const Home = () => (
  <S.Container>
    <S.Image
      src={Nino}
      alt="cachorro perdido,Contato: Isabella
          Celular/WhatsApp: (11) 91234-5678
          Email: ola@sitebacana.com.br, Oferecemos recompensa"
    />
  </S.Container>
);

export default Home;
