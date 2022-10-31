import Head from "next/head";

import AllPosts from "../../components/posts/AllPosts";

// Read-from-Markdown-Split-Metadata-and-Actual-Markdown-Content
import getAllPosts from "../../lib/posts.util";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>Aras' Posts</title>
        <meta name="description" content="Web Development Blogs" />
      </Head>
      <AllPosts posts={props.all} />
    </>
  );
};

export const getStaticProps = async () => {
  // Read-from-Markdown-Split-Metadata-and-Actual-Markdown-Content
  const allPosts = getAllPosts();

  return {
    props: {
      all: allPosts
    }
  };
};

export default AllPostsPage;