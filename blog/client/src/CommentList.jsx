import { Flex, Heading, Text } from 'theme-ui';
import styled from '@emotion/styled';

const ListWrapper = styled.ul`
  margin-top: 8px;
`;

const ListItem = styled.li`
  list-style: inside;
`;

const getComment = (content, status) => {
  switch (status) {
    case 'pending':
      return (
        <Text variant="secondary">
          This comment is awaiting moderation: <i>"{content}"</i>.
        </Text>
      );
    case 'approved':
      return <Text variant="main">{content}</Text>;
    case 'rejected':
      return <Text variant="error">Comment has been rejected!</Text>;

    default:
      return 'Incorrect comment status';
  }
};

export const CommentList = ({ postId, comments }) => {
  return (
    <Flex marginTop="16px" sx={{ flexDirection: 'column' }}>
      <Heading as={'h4'}>Comments</Heading>
      <ListWrapper>
        {comments.map(({ id, content, status }) => (
          <ListItem key={id}>{getComment(content, status)}</ListItem>
        ))}
      </ListWrapper>
    </Flex>
  );
};
