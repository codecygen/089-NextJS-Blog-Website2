import Head from "next/head";

import Welcome from "../components/home-page/Welcome";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

// Read-from-Markdown-Split-Metadata-and-Actual-Markdown-Content
import { getFeaturedPosts } from "../lib/posts.util";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Aras' Blog</title>
        <meta name="description" content="Web Development" />
      </Head>
      <Welcome />
      <FeaturedPosts posts={props.featured} />
    </>
  );
};

export const getStaticProps = async () => {
  // Read-from-Markdown-Split-Metadata-and-Actual-Markdown-Content
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featured: featuredPosts
    }
  };
};

export default HomePage;