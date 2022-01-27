import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { objectToArray } from '../utils';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await axios.get('http://post.com/posts');

      const postsRes = objectToArray(res.data);

      setPosts(postsRes);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, refetchPosts: fetchPosts };
};
