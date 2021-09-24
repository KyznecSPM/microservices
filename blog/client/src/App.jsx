import { PostCreate } from './PostCreate';
import { Flex, Box, Heading, ThemeProvider } from 'theme-ui';

const theme = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    primaryLight: '#7676f4',
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
        cursor: 'pointer',
      },
      '&:active': {
        bg: 'primaryLight',
      },
    },
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{ flexDirection: 'column', width: '100%', alignItems: 'center' }}
      >
        <Box sx={{ flex: 1, margin: '20px' }}>
          <Heading>Create Post</Heading>
        </Box>
        <Box sx={{ flex: 1 }}>
          <PostCreate />
        </Box>
      </Flex>
    </ThemeProvider>
  );
};
