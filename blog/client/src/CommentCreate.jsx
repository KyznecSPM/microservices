import { useState } from 'react';
import { Flex, Box, Input, Label, Button } from 'theme-ui';
import axios from 'axios';

export const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState('');

  const titleChange = (e) => setComment(e.currentTarget.value);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content: comment
      });
      setComment('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Flex>
      <Box as="form" onSubmit={onSubmit}>
        <Box sx={{ marginBottom: '8px' }}>
          <Label htmlFor="CommentCreateInput">New comment</Label>
          <Input
            type="text"
            id="CommentCreateInput"
            value={comment}
            onChange={titleChange}
          />
        </Box>
        <Button>Submit</Button>
      </Box>
    </Flex>
  );
};
