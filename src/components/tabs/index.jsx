import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Tabs = ({ items }) => {
  const [itemSelected, setItemSelected] = useState([items].tabItem);

  return (
    <S.Container>
      <S.Nav>
        <S.List>
          {items.map(({ tabLabel, tabItem }) => (
            <S.ListItem
              onClick={() => setItemSelected(tabItem)}
              active={tabItem === itemSelected}
            >
              {tabLabel}
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
      {
        itemSelected
      }
    </S.Container>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf({
    tabLabel: PropTypes.string,
    tabItem: PropTypes.elementType,
  }).isRequired,
};

export default Tabs;
