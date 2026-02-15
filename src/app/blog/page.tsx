import { Avatar, Box, Card, Flex, TabNav, Text } from '@radix-ui/themes';

import { BlogPost } from './blog-post';

const POSTS = [
  {
    thumbnail: 'michigan-football.jpeg',
    title: 'Living as a Michigan Football Fan',
    url: 'michigan-football',
  },
];

export default function Blog() {
  return POSTS.map((post) => (
    <BlogPost
      key={post.title}
      thumbnailUrl={`/blog/${post.thumbnail}`}
      title={post.title}
      url={`/blog/${post.url}`}
    />
  ));
}
