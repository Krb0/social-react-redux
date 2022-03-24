import useStyles from "./styles";
import Post from "./Post";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
const Posts = () => {
  const posts = useSelector((state: any) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post: any) => (
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
