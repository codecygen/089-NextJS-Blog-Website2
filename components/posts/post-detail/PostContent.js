// Read-from-Markdown-Convert-HTML
import ReactMarkdown from 'react-markdown';

import Image from 'next/image';

// react-syntax-higlighter-Code-Snippet-Styling
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// react-syntax-higlighter-Code-Snippet-Styling
// not react-syntax-highlighter/dist/esm/styles/prism
// but cjs because the code will execute on the server side
// atomDark is a theme.
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
    },

    // This section is used to control code snippet styling
    // in React Markdown
    // react-syntax-higlighter-Code-Snippet-Styling
    // Needs another package called react-syntax-higlighter
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
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