import useStyles from "./styles";
import Post from "./Post";

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;