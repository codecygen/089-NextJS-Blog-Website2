import PostsGrid from './PostsGrid';

import classes from './AllPosts.module.css';

const AllPosts = (props) => {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts} />
        </section>
    );
};

export default AllPosts;