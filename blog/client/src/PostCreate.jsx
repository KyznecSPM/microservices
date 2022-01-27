import { useState } from 'react';
import { Flex, Box, Input, Label, Button } from 'theme-ui';
import axios from 'axios';

export const PostCreate = ({ onAfterPostCreate }) => {
  const [title, setTitle] = useState('');

  const titleChange = (e) => setTitle(e.currentTarget.value);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://post.com/posts/create', { title });
      setTitle('');
      onAfterPostCreate();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Flex>
      <Box as="form" onSubmit={onSubmit}>
        <Box sx={{ marginBottom: '8px' }}>
          <Label htmlFor="PostCreateInput">Title</Label>
          <Input
            type="text"
            id="PostCreateInput"
            value={title}
            onChange={titleChange}
          />
        </Box>
        <Button>Submit</Button>
      </Box>
    </Flex>
  );
};
