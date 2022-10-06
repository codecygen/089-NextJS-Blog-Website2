import Welcome from "../components/home-page/Welcome";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: 'new-blog-post',
    title: 'New Blog Post',
    image: 'new-blog-post.png',
    exerpt: 'This will be my first post in this website!',
    date: '2022-10-05'
  },

  {
    slug: 'new-blog-post',
    title: 'New Blog Post2',
    image: 'new-blog-post.png',
    exerpt: 'This will be my second post in this website!',
    date: '2022-10-06'
  },

  {
    slug: 'new-blog-post',
    title: 'New Blog Post3',
    image: 'new-blog-post.png',
    exerpt: 'This will be my third post in this website!',
    date: '2022-10-07'
  },

  {
    slug: 'new-blog-post',
    title: 'New Blog Post4',
    image: 'new-blog-post.png',
    exerpt: 'This will be my first post in this website!',
    date: '2022-10-08'
  }
];

const HomePage = () => {
  return (
    <>
      <Welcome />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;