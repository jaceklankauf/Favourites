import React from 'react';
import Button from 'components/Button';
import GlobalStyle from '../../theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello fuckin world</h1>
    <Button>close / save</Button>
    <Button secondary width="105px">
      remove
    </Button>
  </div>
);

export default Root;
