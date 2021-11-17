import { Flex, Heading, Card, Box } from 'theme-ui';

import { CommentCreate } from './CommentCreate';
import { CommentList } from './CommentList';

export const PostList = ({ posts, fetchPosts }) => {
  return (
    <Flex marginTop="16px" sx={{ flexDirection: 'column' }}>
      <Box width={'100%'} sx={{ alignSelf: 'center' }}>
        <Heading>Posts List</Heading>
      </Box>
      <Flex
        margin="16px"
        sx={{
          flexWrap: 'wrap',
          '& > div': {
            marginRight: '8px',
            marginBottom: '12px'
          },
          '& > div:last-child': {
            marginRight: '0px'
          }
        }}
      >
        {posts.map(({ id, title, comments }) => (
          <Card key={id}>
            <Heading as="h3">{title}</Heading>
            <CommentList postId={id} comments={comments} />
            <CommentCreate postId={id} onAfterCreate={fetchPosts} />
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};
