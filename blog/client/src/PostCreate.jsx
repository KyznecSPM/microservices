import { useState } from 'react';
import { Flex, Box, Input, Label, Button } from 'theme-ui';
import axios from 'axios';

export const PostCreate = () => {
  const [title, setTitle] = useState('');

  const titleChange = (e) => setTitle(e.currentTarget.value);
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', { title });

    setTitle('');
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
