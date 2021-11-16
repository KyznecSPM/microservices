import { useState, useEffect, useCallback } from 'react';
import { Flex, Heading } from 'theme-ui';
import styled from '@emotion/styled';
import axios from 'axios';

const ListWrapper = styled.ul`
  margin-top: 8px;
`;

const ListItem = styled.li`
  list-style: inside;
`;

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );

      setComments(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

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
