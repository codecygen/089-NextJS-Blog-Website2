import PostItem from './PostItem';

import classes from './PostsGrid.module.css';

const PostsGrid = (props) => {
    const { posts } = props;

    console.log(posts);

    return (
        <ul className={classes.grid}>
            {posts.map(post => (
                <PostItem key={post.slug} post={post} />
            ))}
        </ul>
    );
};

export default PostsGrid;