import fs from 'fs';
import path from 'path';

// Read-from-Markdown-Split-Metadata-and-Actual-Markdown-Content
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Read-from-Markdown-Split-Metadata-and-Actual-Markdown-Content
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData;
};

const getAllPosts = () => {
  const postFileNames = getPostsFiles();

  const allPosts = postFileNames.map(postFileName => {
    return getPostData(postFileName);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
};

export default getAllPosts;