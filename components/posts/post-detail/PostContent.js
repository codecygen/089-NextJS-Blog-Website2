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

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;