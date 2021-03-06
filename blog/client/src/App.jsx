import { PostCreate } from './PostCreate';
import { PostList } from './PostList';
import { Flex, Box, Heading, ThemeProvider } from 'theme-ui';

import { usePosts } from './hooks/usePosts';

const theme = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    primaryLight: '#7676f4'
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
        cursor: 'pointer'
      },
      '&:active': {
        bg: 'primaryLight'
      }
    }
  },
  cards: {
    primary: {
      padding: 16,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)'
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted'
    }
  },
  text: {
    secondary: {
      color: 'lightgrey'
    },
    main: {
      color: 'black'
    },
    error: {
      color: 'red'
    }
  }
};

export const App = () => {
  const { posts, refetchPosts } = usePosts();
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{ flexDirection: 'column', width: '100%', alignItems: 'center' }}
      >
        <Box sx={{ flex: 1, margin: '20px' }}>
          <Heading>Create Post</Heading>
        </Box>
        <Box sx={{ flex: 1 }}>
          <PostCreate onAfterPostCreate={refetchPosts} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <PostList posts={posts} fetchPosts={refetchPosts} />
        </Box>
      </Flex>
    </ThemeProvider>
  );
};
