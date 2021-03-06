import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Tabs = ({ items }) => {
  const [itemSelected, setItemSelected] = useState(items[0].tabItem);

  return (
    <S.Container>
      <S.Nav>
        <S.List>
          {items.map(({ tabLabel, tabItem }) => (
            <S.ListItem
              ket={tabLabel}
              onClick={() => setItemSelected(tabItem)}
              active={tabItem === itemSelected}
            >
              {tabLabel}
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>

      <S.Content>
        {itemSelected}
      </S.Content>
    </S.Container>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf({
    tabLabel: PropTypes.string,
    tabItem: PropTypes.elementType,
  })).isRequired,
};

export default Tabs;
