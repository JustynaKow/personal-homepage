import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { PersonalHomepage } from '../../features/personalHomepage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;