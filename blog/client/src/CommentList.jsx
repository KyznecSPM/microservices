import { Flex, Heading } from 'theme-ui';
import styled from '@emotion/styled';

const ListWrapper = styled.ul`
  margin-top: 8px;
`;

const ListItem = styled.li`
  list-style: inside;
`;

export const CommentList = ({ postId, comments }) => {
  return (
    <Flex marginTop="16px" sx={{ flexDirection: 'column' }}>
      <Heading as={'h4'}>Comments</Heading>
      <ListWrapper>
        {comments.map(({ id, content }) => (
          <ListItem key={id}>{content}</ListItem>
        ))}
      </ListWrapper>
    </Flex>
  );
};
