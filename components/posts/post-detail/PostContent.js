// Read-from-Markdown-Convert-HTML
import ReactMarkdown from 'react-markdown';

import Image from 'next/image';

import PostHeader from './PostHeader';

import classes from './PostContent.module.css';

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // Gray-Matter-Custom-Renderers-to-Use-Image-Component-of-NextJS
  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${post.image}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    // The above code is also valid however, it throws error that is the reason
    // we use it as indicated down below.
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className='classes.image'>
            <Image
              src={`/images/posts/${post.slug}/${post.image}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* Read-from-Markdown-Convert-HTML */}
      {/* Gray-Matter-Custom-Renderers-to-Use-Image-Component-of-NextJS */}
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;