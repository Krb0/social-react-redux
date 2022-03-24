import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
  Box,
} from "@material-ui/core";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = ({ post }: any) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}{" "}
        </Typography>
      </div>
      <div className={classes.overlay}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}} />
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag: string) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button
            className={classes.actionButton}
            size="small"
            color="primary"
            onClick={() => {}}
          >
            <ThumbUpAltIcon fontSize="small" />
            <Typography variant="body2">Like {post.likeCount}</Typography>
          </Button>
          <Button
            className={classes.actionButton}
            size="small"
            onClick={() => {}}
            color="secondary"
          >
            <DeleteIcon fontSize="small" />
            <Typography variant="body2">Delete</Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Post;
