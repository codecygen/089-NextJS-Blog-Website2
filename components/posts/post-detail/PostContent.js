import ReactMarkdown from 'react-markdown';

import PostHeader from './PostHeader';

import classes from './PostContent.module.css';

const DUMMY_POST = {
  slug: 'new-blog-post',
  title: 'New Blog Post4',
  image: 'new-blog-post.png',
  exerpt: 'This will be my first post in this website!',
  date: '2022-10-08',
  content: '# This is the first post!' 
};

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;