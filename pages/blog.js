import AllBlog from "../Components/Blog/Allblog";

export default function AllBlogPage({ posts }) {
  return (
    <>
      <AllBlog posts={posts} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://trainingexpress.org.uk/wp-json/wp/v2/posts`
  );
  const json = await response.json();

  return {
    props: {
      posts: json,
      version: 1,
    },
  };
};
