import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Input from 'components/atoms/Input/Input';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello fuckin world</h1>
        <Button>close / save</Button>
        <Button secondary width="105px">
          remove
        </Button>
        <Input search placeholder="search" />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
